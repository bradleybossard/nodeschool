/*
 // Challenge 2
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += parseInt(process.argv[i]);
}
console.log(sum);
*/

/*
// Challenge 3
var fs = require('fs');

var filename = process.argv[2];
var buf = fs.readFileSync(filename);
var numLines = buf.toString().split('\n').length - 1;

console.log(numLines);
*/

/*
// Challenge 4
var fs = require('fs');

var filename = process.argv[2];
var buf = fs.readFile(filename, function(err, data) {
  if (err) {
    throw err;
  }

  var numLines = data.toString().split('\n').length - 1;
  console.log(numLines);

});
*/

// Challenge 5
/*
var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var filter = process.argv[3];
var buf = fs.readdir(directory, function(err, list) {
  if (err) {
    throw err;
  }

  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]).substring(1) == filter) {
      console.log(list[i]);
    }
  }
});
*/

// Challenge 6
/*
var mymodule = require('./mymodule');
mymodule(process.argv[2], process.argv[3],callback);

function callback(err, data) {
  if (err)
    return "There was a error."

  data.forEach(function (file) {
        console.log(file)
  })
}
*/

// Challenge 7
var http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
});


