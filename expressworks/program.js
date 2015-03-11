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
/*
var express = require('express')
var app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));


app.listen(process.argv[2])
*/


// Challenge 6 - Param Pam Pam
/*
var express = require('express')
var app = express()

app.put('/message/:id', function(req, res){
  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2])
*/

// Challenge 7 - Whats in Query
/*
var express = require('express')
var app = express()

app.get('/search', function(req, res){
  var query = req.query
  res.send(query)
})

app.listen(process.argv[2])
*/

// Challenge 8 - JSON me

var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.send(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.send(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])

