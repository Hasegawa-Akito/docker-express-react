const express = require("express");
const portNumber = 8000;

const app = express();

const pool = require("./database/connection");

app.get("/", (req, res) => {
  pool.getConnection(function (err, connection) {
    if (err) throw err;

    connection.query("select * from test", function (err, results, fields) {
      if (err) throw err;

      //値をjsonで返す
      res.json({ confirm: results[0].message });
    });
  });
});

app.set("port", portNumber);

module.exports = app;
