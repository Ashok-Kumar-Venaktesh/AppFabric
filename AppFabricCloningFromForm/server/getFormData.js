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
app.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
               'Enter Git URL :' +
               '<input type="text" name="gitURL" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Clone</button>' +
            '</form>';
               
  res.send(html);
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
  var gitURL = req.body.gitURL;
  
  cloneGit(gitURL, function(err) {
  	if(err) {res.status(500).send();}
  	res.send(gitURL);
  });  

});

app.listen(8080);