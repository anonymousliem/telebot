const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
require("dotenv").config();
var cors = require("cors");
var uuid = require("uuid");
// parse application/json
app.use(bodyParser.json());
app.use(cors());
//create database connection
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port : process.env.DB_PORT
});
//connect to database
conn.connect((err) => {
  if (!err) {
    console.log("Connected");
    var sqlTableAccount =
      "CREATE TABLE IF NOT EXISTS account (id_account INT NOT NULL AUTO_INCREMENT, email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id_account)) ";

    conn.query(sqlTableAccount, function (err, result) {
      var checkRowAccount = "SELECT COUNT(*) as total FROM account";
      conn.query(checkRowAccount, function (errs, results) {
        if (results[0].total == 0) {
          var sqlAccountDummy =
            "INSERT INTO account (id_account, email, password) VALUES ('1','admin@gmail.com','Standar123.'),('2','example@gmail.com','example')";
          conn.query(sqlAccountDummy, function (errs, resultst) {
            if (errs) throw errs;
          });
          if (err) throw err;
        }
        if (errs) throw errs;
      });
    });

    var sqlTableKeyword =
      "CREATE TABLE IF NOT EXISTS keyword (id_keyword INT NOT NULL AUTO_INCREMENT, keyword VARCHAR(255) NOT NULL, results TEXT NOT NULL, PRIMARY KEY(id_keyword))";
    conn.query(sqlTableKeyword, function (err, result) {
      var checkRowKeyword = "SELECT COUNT(*) as total FROM keyword";
      conn.query(checkRowKeyword, function (errs, results) {
        if (results[0].total == 0) {
          var sqlDummyKeyword =
            "INSERT INTO keyword (id_keyword, keyword, results) VALUES ('1', 'test1', 'test1'),('2', 'test2', 'test2')";
          conn.query(sqlDummyKeyword, function (errs, resultst) {
            if (errs) throw errs;
          });
          if (err) throw err;
        }
        if (errs) throw errs;
      });
    });

  } else {
    console.log("Connection Failed");
  }
});

/**** START  CRUD ACCOUNT *****/
//login api

//show all account
app.get("/api/accounts", (req, res) => {
  let sql = "SELECT * FROM account";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//show single account
app.get("/api/accounts/:id", (req, res) => {
  let sql = "SELECT * FROM account WHERE id_account=" + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//post account
app.post("/api/accounts", function (req, res) {
  let sql = `INSERT INTO account(email, password) VALUES (?)`;

  let values = [req.body.email, req.body.password];

  conn.query(sql, [values], (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});
//update account
app.put("/api/accounts/:id", (req, res) => {
  let sql =
    "UPDATE account SET email='" +
    req.body.email +
    "', password='" +
    req.body.password +
    "' WHERE id_account=" +
    req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//Delete users
app.delete("/api/accounts/:id", (req, res) => {
  let sql = "DELETE FROM account WHERE id_account=" + req.params.id + "";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//LOGIN USERTS
app.post("/api/login", function (req, res) {
  let sql =
    "SELECT * FROM account WHERE email='" +
    req.body.email +
    "' AND password='" +
    req.body.password +
    "'";

  let values = [req.body.email, req.body.password];

  conn.query(sql, [values], (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
        response: results,
        token: uuid.v4(),
      })
    );
  });
});
/****  END CRUD ACCOUNT*****/

/****  CRUD Keyword*****/
//show all keywords
app.get("/api/keywords", (req, res) => {
  let sql = "SELECT * FROM keyword";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});
//show single keywords
app.get("/api/keywords/:id", (req, res) => {
  let sql = "SELECT * FROM keyword WHERE id_keyword=" + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});
//post keywords
app.post("/api/keywords", function (req, res) {
  let sql = `INSERT INTO keyword(keyword, results) VALUES (?)`;

  let values = [
    req.body.keyword,
    req.body.results,
  ];

  conn.query(sql, [values], (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});
//update keywords
app.put("/api/keywords/:id", (req, res) => {
  let sql =
  "UPDATE keyword SET keyword='" +
  req.body.keyword +
  "', results='" +
  req.body.results +
  "' WHERE id_keyword=" +
  req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});
//Delete users
app.delete("/api/keywords/:id", (req, res) => {
  let sql = "DELETE FROM keyword WHERE id_keyword=" + req.params.id + "";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//Server listening
var port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server started on port 4000..." + "DB HOST : " + process.env.DB_HOST);
});