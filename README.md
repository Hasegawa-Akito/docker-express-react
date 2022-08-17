# contact-book

保育園、幼稚園での連絡用 web アプリ

# front docker サーバー起動

1. git clone を行う
2. 作業ディレクトリを frontend に移動
3. docker-compose build
4. docker-compose run app npm install
5. docker-compose up

# backend docker サーバー起動
1. git clone を行う
2. 作業ディレクトリを backend に移動
3. mysqlディレクトリにmysql.envファイル作成しコードを追加
4. backendディレクトリにapp.envファイル作成しコードを追加
3. docker-compose build
4. docker-compose run app npm install
5. docker-compose up
