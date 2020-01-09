var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use the database function
var burger = require("../modules/burger");

// Create all out routes and set up logic with the routes
// =============================================================
router.get("/", function (data) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject)
        res.render("index", burgerObject)
    })
});



// Export routes for server.js to use.
// =============================================================
module.exports = router;