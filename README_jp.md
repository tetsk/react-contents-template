# このプロジェクトについて
`create-react-app` を使用した SPA のテンプレートです。\
`create-react-app` の詳細は[こちら](https://github.com/facebook/create-react-app/blob/master/README.md)。

(製作者のホームページを汎用化したアプリケーションテンプレートです。)

## 特徴
* ホームページ、ポートフォリオ、デスクトップガジェットのように、複数のコンテンツを独立して並べて管理できます
* 別プロジェクトで作成したコンテンツでも、JSON 形式のファイルを少しいじるだけでメニューバーに追加できます。

# セットアップ方法

1. [Node.js](https://nodejs.org/ja/) をインストールします
2. コマンドラインで `"git clone https://github.com/tetsk/react-contents-template.git"` を実行し、このリポジトリをクローンします
3. ローカルリポジトリのトップで `"npm install"` を実行し、外部パッケージをインストールします

# 使い方

## 一時ビルド・アプリの起動
以下のコマンドを実行すると、react-scripts でアプリケーションをビルド・実行します。
```
npm start
```

## GUI 起動
以下のコマンドを実行すると、ブラウザを起動して `http://localhost:3000` にアクセスします。
```
npm run gui
```
※ `"npm start"` の実行によって自動的にブラウザを起動したい場合、[.env](./.env) の `BROWSER` プロパティを削除またはコメントアウトしてください。

## Lint ツールの実行
以下のコマンドを実行すると、`Prettier` と `ESLint` を実行して、`.js` 及び `.jsx` ファイルのフォーマッティングと文法修正を行います。
```
npm run lint
```
※ Lint ツールの動作を変更したい場合、[Prettier](https://prettier.io/) 及び [ESLint](https://eslint.org/) のドキュメントを参照して [.eslintrc.json](./.eslintrc.json) を修正してください。\
※ VSCode を使用している場合、`eslint.enable` と `eslint.autoFixOnSave` を有効化することで、ファイル保存時に自動で Lint による修正を実行できます。

## ビルド
以下のコマンドを実行すると、react-scripts を使用してビルドを行い、[./build](./build) に出力します。
```
npm run build
```

# コンテンツの追加方法

1. [Template.jsx](./src/contents/subframe/Template.jsx) を参考に、[src/contents/subframe](./src/contents/subframe) ディレクトリにコンテンツのトップコンポーネントを作成します。(`Template.jsx` のコピー＆リネームを推奨)
2. [contentList.js](./src/contents/subframe/contentList.js) ファイル内の `contentList` にコンテンツのトップコンポーネントを追加します。
3. [src/contents/subframe/template](./src/contents/subframe/template) ディレクトリ内のファイルを参考に、サブコンテンツのコンポーネントを作成します。
4. [subContentList.js](./src/contents/subframe/template/subContentList.js) を参考に、新規の `subContentList.js` を作成し、その中の `subContentList` にサブコンテンツのコンポーネントを追加します。
5. サブコンテンツのコンポーネントを自由に編集してください。
