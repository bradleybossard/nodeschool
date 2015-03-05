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


