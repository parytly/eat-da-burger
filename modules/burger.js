var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var app = express();

var PORT = process.env.PORT || 8080;

// PARSE REQUEST BODY AS JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n")

});


// DATA 

// ROUTES

app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
})