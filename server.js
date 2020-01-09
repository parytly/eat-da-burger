// var orm = require("./config/orm.js");

// orm.selectAll();

// orm.insertOne();

// orm.updateOne();

// Dependencies
// =============================================================
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express Handlebars App
// =============================================================
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes: Import routes and give the server access to them.
// =============================================================
var routes = require("./controllers/burgers_controller.js")
app.use(routes);

// Start our server so that it can begin listening to client requests.
// =============================================================
app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
})
