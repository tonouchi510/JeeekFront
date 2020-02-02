# JeeekFront
エンジニアのための自己実現SNSアプリ

フロントエンド開発およびUI設計についてのドキュメントは[Wiki](https://github.com/tonouchi510/JeeekFront/wiki)をご覧ください。

## クイックスタート
- nodeenvを事前にインストールしておく

- package.jsonにしたがってインストール
```
$ npm install
```

- devServerの起動
```
$ npm run start
```

## 技術スタック
- React/Redux
- Redux-Saga
- Firebase
- Storybook/StoryShot
- CircleCI


## ディレクトリ構成
```
.
├── .circleci           # circleciの設定ファイル。CI/CDについて書いてある。
├── .storybook          # storybookの設定ファイル
├── npm-script          # シードデータ投入スクリプトなど
├── public              # html/imagesなどの静的ファイル
└── src
    ├── actions         # actionを置く
    ├── components      # presentatinal componnetの置き場
    ├── containers      # container componnetの置き場
    ├── reducers        # reducerを置く
    ├── sagas           # sagaファイルを置く
    ├── services        # 外部とのインターフェース
    └── stories         # storybook用のコード置き場
```

