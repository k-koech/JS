var dt = require("./myfirstmodule");
var http = require('http');
var fs = require("fs")

// http.createServer(function (req, res) 
// {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("Kelvin Koech");
//   res.end();
// }).listen(8080);

// http.createServer(function (req, res) 
// {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8000);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var x="The date and time are currently: ".toUpperCase()
  res.write(x + dt.myDateTime());
  res.write("kip "+req.url)
  res.end();

  // fs.readFile('demofile1.html', function(err, data) {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   return res.end();
  // });
  
}).listen(8080);