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
    console.log(process.env.DB_HOST);
    console.log("Connected");
  } else {
    console.log("Connection Failed");
  }
});

//Server listening
var port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server started on port 4000..." + process.env.DB_HOST + "asasa");
  //console.log(process.env.DB_HOST)
});
