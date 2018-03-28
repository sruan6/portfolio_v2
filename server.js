// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
// ===========================================================


// Middleware
// ===========================================================
app.use(express.static(path.join(__dirname, '/')));


// Routing
// ===========================================================
app.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname,'index.html'));	
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});