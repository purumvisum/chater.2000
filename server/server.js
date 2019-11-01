const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
const users = require('./users')();

const app = express();


const publicPath = path.join(__dirname, "../client");
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIO(server);

const createMessage = (author, text, id) => {
    return {
        text,
        author,
        id,
        date: Date.now()
    }
}

// do this static
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    socket.on("message:create", (data, callback) => {
        if (!data) {
            callback("MESSAGE CANNOT BE EMPTY")
        } else {
            const user = users.get(socket.id);
            if (user) {
                io.to(user.room).emit("message:new", createMessage(data.author, data.text, data.id));
            }
            callback();
        }
    });
    socket.on("user:join", (user, callback) => {
        if (!user.name || !user.room) {
                return callback("ENTER VALID USER DATA")
        } else {
            socket.join(user.room);
            users.add(socket.id, user.name, user.room);
            callback({userId: socket.id});
            socket.emit("message:new", createMessage('Admin', `Hi,${user.name}`));
            socket.broadcast.to(user.room).emit(
                "message:new",
                createMessage('Admin', `${user.name} is here`)
            );
            io.to(user.room).emit("users:updated", users.getByRoom(user.room))
        }
    });
    socket.on("disconnect", () => {
        const user = users.remove(socket.id);
        if (user) {
            io.to(user.room).emit("message:new",
                createMessage('Admin', `${user.name} left`)
            );
            io.to(user.room).emit("users:updated", users.getByRoom(user.room))
        }

    })
});

server.listen (port, ()=>{
    console.log(`Server has been started om ${port}...`);
});
