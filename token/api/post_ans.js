var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var { answer_list_noun } = require('../tokenization');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: 'glossika_db'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
});

const defaultFunc = () => http.createServer(function (req, res) {
  // fs.readFile('../tokenization.html', function (err, data) {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.write(data);
  //   return res.end();
  // });

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");


  console.log('asdasd:', req.method)
}).listen(80);

console.log('hi this is from post_ans:', answer_list_noun);