const PORT = process.env.PORT || 8888;

let app = require('express')(),
    http = require('http').Server(app),
    util = require('util'),
    io = require('socket.io')(http);

app.get('/', function (req, res) {
    console.log(PORT);
    switch(PORT) {
        case 9999:
            res.sendFile(__dirname + '/assets/markup/9999/index.html');
            break;
        case 8888:
            res.sendFile(__dirname + '/assets/markup/8888/index.html');
            break;
        case 7777:
        default:
            res.sendFile(__dirname + '/assets/markup/7777/index.html');
    }
});

app.get('/assets/js/phaser.min.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/phaser.min.js');
});
app.get('/assets/js/menu.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/menu.js');
});
app.get('/assets/js/game.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/game.js');
});
app.get('/assets/js/game_over.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/game_over.js');
});
app.get('/assets/js/main.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/main.js');
});

app.get('/assets/images/menu.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/menu.png');
});
app.get('/assets/images/snake.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/snake.png');
});
app.get('/assets/images/apple.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/apple.png');
});
app.get('/assets/images/gameover.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/gameover.png');
});
app.get('/assets/images/favicon.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/favicon.png');
});
app.get('/assets/images/key-left.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/key-left.png');
});
app.get('/assets/images/key-up.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/key-up.png');
});
app.get('/assets/images/key-down.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/key-down.png');
});
app.get('/assets/images/key-right.png', function (req, res) {
    res.sendFile(__dirname + '/assets/images/key-right.png');
});

io.on('connection', function (socket) {
    io.emit('this', {will: 'be received by everyone'});

    socket.on('chat message', function (msg) {
        console.dir(msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function () {
        io.emit('user disconnected');
    });
});

http.listen(PORT, function () {
    //console.log(util.inspect(app));
    console.log('listening on *:' + PORT);
});
