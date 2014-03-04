var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var osc = require('node-osc');

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use(express.static('public'));

var oscServer = new osc.Server(3333, '127.0.0.1');
oscServer.on("message", function (msg, rinfo) {
  io.sockets.emit("osc", msg);
});