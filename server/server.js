const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");

const app = express();


const publicPath = path.join(__dirname, "../client");
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIO(server);

// do this static
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    socket.on("message:create", (data, callback) => {
        if (!data) {
            callback("MESSAGE CANNOT BE EMPTY")
        } else {
            callback();
            io.emit("message:new", {
                text: data.text,
                date: Date.now()
            })
        }
    })
});

server.listen (port, ()=>{
    console.log(`Server has been started om ${port}...`);
});
