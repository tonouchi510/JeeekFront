# Jeeek functions

雑多なnpm-scriptを開発する。コマンドの詳細はpackage.jsonを見ること。

## features
- firebase authenticationのユーザ追加
- firestoreへの開発環境用seedデータ投入
  - 今のところfeedsだけ
- firestoreの初期化

## seedファイル
- gcs(jeeek-dev-firestore-seedバケット)に置いてある
- functions/seeds/以下に配置してコマンド実行すること