// Using this node http server, we can decode the POST body:

var http = require("http");
var parseForm = require("body/any");

var server = http.createServer(function(req, res) {
  console.log(req.method, req.url, req.headers)
  parseForm(req, res, function(err, params) {
    console.log(params);
    res.end('ok/n');
  })
})
server.listen(5000)


