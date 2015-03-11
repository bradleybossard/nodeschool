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

var path = require('path')
var express = require('express')
var app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates')) 

//app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})


app.listen(process.argv[2])
