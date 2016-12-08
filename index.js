var http = require('http');

http.createServer(function (req, res) {
	res.writeHead("200", '{"content-type": "application/json"}');
	res.end('Hello world');
}).listen(8911);

console.log('Server runing at http://localhost:8911');

