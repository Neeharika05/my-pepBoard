const express = require("express"); // Acess
const socket = require("socket.io");

const app = express(); // inilizes the application and server ready

app.use(express.static("public"));

let port = 5000;
let server =  app.listen(port, () => {
    console.log("Listening to port " + port);
})

let io = socket(server);

io.on("connection",(socket) => {
    console.log("Made socket connection");
    // Recieved Data
    socket.on("beginPath",(data) => {
        // Now trasfer data to all connected computers
        io.sockets.emit("beginPath",data);
    })
    socket.on("drawStroke",(data) => {
       io.sockets.emit("drawStroke",data); 
    })
    socket.on("redoUndo",(data) => {
        io.sockets.emit("redoUndo",data);
    })
})