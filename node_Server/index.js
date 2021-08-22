// Node Server which will  handle socket io connections
// const io = require('socket.io')(8000)
const io = require('socket.io')(8000, {
    cors: {
        origin: '*',
    }
});

// server-side
// const io = require("socket.io");

const users = {}

console.log("Started........");

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New USer", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);

    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    })
});