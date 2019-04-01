//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
// Scraping Tools (USED IN ROUTES)
// var axios = require("axios");
// var cheerio = require("cheerio");

var app = express();

var PORT = process.env.PORT || 3000;

//Require models
var db = require("./models")

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("./public"));

//Set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/apiRoutes");

app.use(routes);

//Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//mongoose.Promise = Promise
mongoose.connect(MONGODB_URI)
.catch(function(err){console.log(err);
});

//Routes
// require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app)

//Start the server
app.listen(PORT, function() {
    console.log("App running on http://localhost:" + PORT);
  });