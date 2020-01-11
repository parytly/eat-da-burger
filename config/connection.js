// +++++++ 2 +++++++++
var mysql = require('mysql');

// Mysql connection
// =============================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

// Make the connection
// =============================================================
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n")

});

// Export connection for our ORM to use.
// =============================================================
module.exports = connection;
