const mysql = require("mysql");

//mysqlに接続 poolを使い時間が経って接続が切れるのを防ぐ
const pool = mysql.createPool({
  //localでは.envファイルの値を使用
  host: process.env.MYSQL_ROOT_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

pool.getConnection(function (err, connection) {
  if (err) throw err;
  console.log("Connected");

  //heart tableを作成
  connection.query(
    "CREATE TABLE IF NOT EXISTS test(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, message VARCHAR(255) NOT NULL)",
    function (err, result) {
      if (err) throw err;
      connection.query(
        "INSERT INTO test(message) VALUES(?)",
        ["Server & DB connection!"],
        function (err, results, fields) {
          if (err) throw err;
        }
      );
    }
  );
});

// Export Connection
module.exports = pool;
