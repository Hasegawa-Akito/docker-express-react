# front docker サーバー起動

1. git clone を行う
2. 作業ディレクトリを frontend に移動
3. docker-compose build
4. docker-compose run app npm install
5. docker-compose up

# backend docker サーバー起動

1. git clone を行う
2. 作業ディレクトリを backend に移動
3. mysql ディレクトリに mysql.env ファイル作成しコードを追加
4. backend ディレクトリに app.env ファイル作成しコードを追加
5. docker-compose build
6. docker-compose run app npm install
7. docker-compose up
