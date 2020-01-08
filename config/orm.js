var connection = require("./connection.js")

var orm = {
    // Log the Table from MYSQL 
    selectAll: function () {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("id: " + res[i].id + " | " + "burger_name")
            }

        })
    },
    insertOne: function () {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("id: " + res[i].id + " | " + "burger_name")
            }

        })
    },
    updateOne: function () {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("id: " + res[i].id + " | " + "burger_name")
            }

        })
    }
}

module.exports = orm;