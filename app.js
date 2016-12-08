var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.end("你好，世界!");
});

app.get('/lists', function (req, res) {
	res.end('文章列表');
});

app.post('/comment', function (req, res) {
	res.end('文章评论');
})

app.post('/praise', function (req, res) {
	var content = req.body["content"];
	var time = req.body["time"];
	console.log(content);
	console.log(time);
	res.write(content + time);
	res.end('文章点赞');	
});




var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Example app listening at http://%s:%s", host, port);
});
