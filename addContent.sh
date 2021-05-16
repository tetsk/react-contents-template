#!/bin/sh
NORMAL=0
ARG_ERROR=1
MD_ERROR=2
CP_ERROR=3
templatedir="./src/templates"
subframedir="./src/contents/subframe"

if [ $# != 1 ]; then
    echo "ERROR: Specify a content name as an argument"
    exit $ARG_ERROR
fi
name=$1

tgdir="$subframedir/${name^}"
mkdir $tgdir
if [ $? != 0 ]; then
    echo "ERROR: Could not create ${tgdir} dir"
    exit $MD_ERROR
fi

sed -e "s/___ContentName___/${name^}/g" $templatedir/subContentList.js > $tgdir/subContentList.js
if [ $? != 0 ]; then
    echo "ERROR: Could not copy subContentList.js"
    exit $CP_ERROR
fi

subContentFile=${name^}Content.jsx
sed -e "s/___ContentName___/${name^}/g" $templatedir/SubContent.jsx > $tgdir/$subContentFile
if [ $? != 0 ]; then
    echo "ERROR: Could not copy SubContent.jsx"
    exit $CP_ERROR
fi

contentTopFile=${name^}.jsx
sed -e "s/___ContentName___/${name^}/g" $templatedir/Content.jsx > $subframedir/$contentTopFile
if [ $? != 0 ]; then
    echo "ERROR: Could not copy Content.jsx"
    exit $CP_ERROR
fi

exit $NORMAL
