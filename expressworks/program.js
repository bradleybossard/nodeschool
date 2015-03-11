// Challenge 1 - Hello World
/*
var express = require('express')
var app = express()

app.get('/home', function(req, res) {
  res.end('Hello World!')

})

app.listen(process.argv[2])
*/

/*
// Challenge 2 - Static

var express = require('express')
var app = express()

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
*/

// Challenge 3 - Jade 
/*
var path = require('path')
var express = require('express')
var app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates')) 

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])
*/

/*
// Challenge 4 - Gold Old Form - Bug in getting to verify though.
var express = require('express');
var connect = require('connect');
var app = express();

// Add middleware
app.use(connect.urlencoded());

app.post('/form', function (req, res) {
  var revStr = req.body.str.split('').join('');
  res.send(revStr);
});

app.listen(process.argv[2]);
*/

// Challenge 5 - Stylish CSS

var express = require('express')
var app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));


app.listen(process.argv[2])
