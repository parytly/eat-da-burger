// +++++++ this connects/grabs the MySQL data  +++++++++

// Import Mysql connection
// =============================================================
var connection = require("../config/connection.js");


// Object for all the SQL statement functions.
// =============================================================
var orm = {
    // Log the Table from MYSQL 
    selectAll: function (tableName, cb) {
        connection.query("SELECT * FROM " + tableName, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (tableName, cb) {
        connection.query("INSERT INTO " + tableName + " (burger_name) VALUES (?)", function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    // updateOne: function () {
    //     connection.query("SELECT * FROM burgers", function (err, res) {
    //         if (err) throw err;
    //         for (var i = 0; i < res.length; i++) {
    //             console.log("id: " + res[i].id + " | " + "burger_name")
    //         }

    //     })
    // }
}

module.exports = orm;