const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");

const app = express();


const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIO(server);

// do this static
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("IO Connection");

    socket.on("createMessage", (data) => {
        console.log("create message", data);
        socket.emit("newMessage", {
            text: data.value,
            date: Date.now()
        })
    })
})

server.listen (port, ()=>{
    console.log(`Server has been started om ${port}...`);
});
