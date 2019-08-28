# JeeekFront
エンジニアのための自己実現SNSアプリ

## クイックスタート
- nodebrewでnodeをインストール＆適用
```
$ nodebrew install-binary v11.14.0
$ nodebrew use v11.14.0
```

- package.jsonにしたがってインストール
```
$ npm install
```

- devServerの起動
```
$ npm run start
```


## ディレクトリ構成
```
./src/
├── actions             # actionを置く。塊ごとにファイルを分ける
├── components          # Presentation Componentの置き場
│   ├── Login           # まずページ単位で分割し、次にコンポーネント単位で分割
│   ├── Top
│   ├── UserHome
│   └── UserProfile
├── containers          # Container Componentの置き場
│   ├── Login           # 基本的にcomponentsと同じ構成になる
│   ├── Top
│   ├── UserHome
│   └── UserProfile
├── reducers            # reducerを置く。塊ごとにファイルを分ける
└── App.tsx             # ルートに当たるファイル。routingなどを担当

```


## 備考
### フロントエンド環境構築でやった手順
- プロジェクト初期化
```
$ npm init -y
```

- パッケージインストール
```
$ npm i -D webpack webpack-cli webpack-dev-server
$ npm i -D typescript ts-loader
$ npm i -S react react-dom @types/react @types/react-dom
$ npm i -D prettier eslint-config-prettier eslint-plugin-prettier pretty-quick 
$ npm i -D eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
$ npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
$ npm i -D @babel/core @babel/preset-env babel-loader @babel/preset-reac

# .eslintrc.json, webpack.config.js, .babelrc, .prettierrcを設定（ファイル参照）
```
