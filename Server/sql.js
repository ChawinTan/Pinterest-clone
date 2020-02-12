var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'pinterest_clone'
});

connection.connect();

module.exports = connection;