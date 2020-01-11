// +++++++ Appends to the html/ handlebars  +++++++++
// +++++++ grabs data from burger.js(module folder) +++++++++
// +++++++ connects to the server.js +++++++++

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use the database function
var burger = require("../modules/burger.js");

// Create all out routes and set up logic with the routes
// =============================================================
router.get("/", function (req, res) {
    burger.selectAll(function (data) //this function is the cb() from burger.js
    {
        var burgerObject = {
            burgers: data
        };

        res.render("index", burgerObject)
        console.log('hi')
    })
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
        res.json({ burgers, data });
    });
})


// Export routes for server.js to use.
// =============================================================
module.exports = router;