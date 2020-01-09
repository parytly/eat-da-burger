// Import Mysql connection
// =============================================================
var connection = require("../config/connection");


// Object for all the SQL statement functions.
// =============================================================
var orm = {
    // Log the Table from MYSQL 
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("id: " + res[i].id + " | " + "burger_name")
            }
            cb(res);
        });
    },
    // insertOne: function () {
    //     connection.query("SELECT * FROM burgers", function (err, res) {
    //         if (err) throw err;
    //         for (var i = 0; i < res.length; i++) {
    //             console.log("id: " + res[i].id + " | " + "burger_name")
    //         }

    //     })
    // },
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