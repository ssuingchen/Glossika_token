var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var tokenization = require('./tokenization');
var { answer_list_noun } = require('./tokenization');
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

http.createServer(function (req, res) {
  fs.readFile('tokenization.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log('hi:', answer_list_noun);

