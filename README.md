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


## ディレクトリ構成
```
./src/
├── actions             # actionを置く。塊ごとにファイルを分ける
├── components          # Presentation Componentの置き場
├── containers          # Container Componentの置き場
├── reducers            # reducerを置く。塊ごとにファイルを分ける
└── App.tsx             # ルートに当たるファイル。routingなどを担当
```

