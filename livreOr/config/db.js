let mysql = require('mysql');

let connection = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'tutorile'
});
connection.connect();

module.exports = connection;