Confirm [README_jp.md](./README_jp.md) for Japanese users.

# About this project
This is a template project of SPA used `create-react-app`.\
Please confirm [here](https://github.com/facebook/create-react-app/blob/master/README.md) to learn the details and more info of `create-react-app`.

(This is a rebuild project of the author's homepage as a generic template.)

## Features
* Multiple contents can be arranged independently like homepage, portfolio, or desktop gadgets
* Link to new contents can be added to menu bars by simply editing JSON lists.

# Setup

1. Install [Node.js](https://nodejs.org/ja/)
2. Clone this repository by launching `"git clone https://github.com/tetsk/react-contents-template.git"` on the command line
3. Inatall external packages by launching `"npm install"` on the root of local repository

# Usage

## Temporary build and run app
Following command launches the app by using react-scripts.
```
npm start
```

## Launch app GUI
Following command launches a browser and accesses to `http://localhost:3000`.
```
npm run gui
```
NOTE: If you launch a browser automatically when `"npm start"` runs, please remove or commentout `BROWSER` property from [.env](./.env).

## Run lint tools
Following command launches `Prettier` and `ESLint` to format code styles and syntax of `.js` and `.jsx` files and .
```
npm run lint
```
NOTE: If you want to arrange configurations of the lint behavior, please refer the docs of [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) and edit [.eslintrc.json](./.eslintrc.json).\
NOTE: On VSCode, if you launch the lint tools automatically when files are saved, please activate the settings of `eslint.enable` and `eslint.autoFixOnSave`.

## Build
Following command build the app by using react-scripts and exports to [./build](./build) directory.
```
npm run build
```

# How to add contents

1. Create a content top component in [src/contents/subframe](./src/contents/subframe) dir like [Template.jsx](./src/contents/subframe/Template.jsx). (You should use the renamed copy.)
2. Add the content top component to `contentList` in [contentList.js](./src/contents/subframe/contentList.js).
3. Create sub content components like components in [template](./src/contents/subframe/template) dir.
4. Create `subContentList.js` and add sub content components to `subContentList` like [subContentList.js](./src/contents/subframe/template/subContentList.js).
5. Edit sub content components as you like.

## [addContent.sh](./addContent.sh)
You can do the step 1, 3, and 4 automatically by using `addContent.sh`.
```
./addContent.sh <contentName>
```
