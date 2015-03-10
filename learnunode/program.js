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

/*
// Challenge 7
var http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
});
*/

/*
// Challenge 8

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
  response.pipe(bl(function(err, data) {
    if (err) {
      return console.error(err);
    }

    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
*/

/*
// Challenge 9 

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++)
          console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
          response.pipe(bl(function (err, data) {
                  if (err)
                    return console.error(err)

                  results[index] = data.toString()
                  count++

                  if (count == 3)
                    printResults()
                }))
            })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
*/

/*
// Challenge 10 - Time Server
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

*/


/*
// Challenge 11 - HTTP File Server

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/

/*
// Challenge 12 - HTTP Uppercaser

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/

// Challenge 13 - HTTP JSON API SERVER
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
