var
    http = require('http'),
    fs = require('fs'),

    express = require('express'),
    app = express(),
    server = http.createServer(app),
    io = require('socket.io').listen(server),

    PORT = 3000;


app.get('/', function (req, res) {
    fs.readFile('index.html', 'utf-8', function (error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

app.get('/maps', function (req, res) {
    fs.readFile('map.png', function (error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

app.get('/skels', function (req, res) {
    fs.readFile('skeleton.png', function (error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

io.sockets.on('connection', function (client) {
    console.log('connected. ID: ' + client.id);

    client.emit('message', 'Login success !');
    client.broadcast.emit('message', 'Another client login success! ');

    client.on('nickname', function (nickname) {
        client.nickname = nickname;
    });

    client.on('message', function (message) {
        console.log(client.nickname + ' -- ' + client.id + '; tells me he said to me : ' + message);
    });
});


server.listen(port = Number(process.env.PORT || PORT));