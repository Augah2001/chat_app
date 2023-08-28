const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const io = socketio(expressServer);

io.on("connection", (socket) => {
  
  socket.emit('connectMessage', {data: 'you are connected'})
  socket.on('messageToServer', (data) => {
    io.emit('messageToClient', data )
  })
});
