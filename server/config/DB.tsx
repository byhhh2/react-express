const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', //mysql의 id
  password: 'root', //mysql의 password
  database: 'mydb', //사용할 데이터베이스
});

connection.connect();

module.exports = connection;
