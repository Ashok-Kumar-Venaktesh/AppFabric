var express = require('express');
var path = require('path');
var cloneGit = require('./cloneGit.js');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

// create our app
var app = express();

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser());

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.use(express.static(__dirname + '/../client'));



// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/deploy', function(req, res){
  var gitURL = req.body.gitURL;
  var res = gitURL.split("/");
  var repoName = (res[res.length-1].split("."))[0];
  var currentDirecotryPath = __dirname+"/"+repoName;

  console.log("Repository name is ", currentDirecotryPath);
  console.log("gitURL ",gitURL);

  cloneGit(gitURL, function(err) {
  	if(err) {res.status(500).send();}
  	
  });  

});

app.listen(8080);