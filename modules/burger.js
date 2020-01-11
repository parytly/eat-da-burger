// +++++++ connects to ORM and grabs the data from the ORM +++++++++
// +++++++ specify which data to use from the orm(mysql) +++++++++

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
            console.log(res)
        })
    },
    insertOne: function (cb) {
        orm.insertOne("burgers", function (res) {
            cb(res);
            console.log(res)
        })
    }
}

module.exports = burger;