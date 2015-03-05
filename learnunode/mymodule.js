var fs = require('fs');
var path = require('path');

module.exports = function(directory, filterString, callback) {
  var buf = fs.readdir(directory, function(err, list) {
    if (err) {
      return callback(err);
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterString;
    })

    callback(null, list);
  });
}


