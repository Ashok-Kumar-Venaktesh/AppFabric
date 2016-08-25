// require modules
var express = require('express');
var app = express();
var path = require('path');
var cloneGit = require('./cloneGit.js');


// serve the static files
app.use(express.static(__dirname + '/../client'));


// Clone the github project when URL is redirected to localhost:8080/HomePage.html
app.get('/HomePage.html', function(req, res) {
  console.log("Query code is: ", req.query.code);
  cloneGit(function(err) {
  	if(err) {res.status(500).send();}
  	res.send(req.query.code);
  });  
});


// homepage
app.get('/', function(req,res,next){
	console.log("You are in homepage");
	next();
});


//Listen to port 8080
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
