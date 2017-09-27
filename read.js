var fs = require('fs');
var os = require('os');

fs.readFile('epicench.1b.txt','utf8', function(err, data) {
  if (err) throw err;
  //console.log(data);
  var lines = data.split(os.EOL);
  console.log(lines.length);
  for (lineNumber in lines) {
    console.log(lineNumber + ": " + lines[lineNumber]);
  }
});
