var express = require('express');
var app = express();
var http = require('http').Server(app);
var io =  require('socket.io')(http);

http.listen(3000, function() {
	console.log('listening on port 3000');
});

app.use(express.static('public'));





// -- Routes


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('user connected');
	socket.on('disconnect', function() {
		console.log('user disconnected');
	});
});

