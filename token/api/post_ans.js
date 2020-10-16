var http = require('http');
var fs = require('fs');
var mysql = require('mysql');

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
// We enter the above line in MySQL workbench
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: 'glossika_db'
});

//connect to MySQL, tested to create table and insert a record 
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // create a test table
  // var sql_try = "CREATE TABLE try (id INT, animal VARCHAR(255))"
  // con.query(sql_try, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
  
  // insert a row
  // var sql_try_insert = "INSERT INTO try (id, animal) VALUES (1, 'dog')";
  // con.query(sql_try_insert, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");

  // check result
  // con.query("SELECT * FROM try", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });
});

http.createServer(function (req, res) {
  // try to get res.body(the answer_list_noun & answer_list_verb) but failed
  console.log('asdasd:', res.body);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
  //insert answer_list_noun and answer_list_verb to MySQL

}).listen(8080);
