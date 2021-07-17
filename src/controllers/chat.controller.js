module.exports.chat = (http) => {
  const io = require("socket.io")(http, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });
  io.on("connection", (socket) => {
    socket.on("send-message", (message) => {
      //console.log("From Client", message);

      socket.broadcast.emit("receive-message", message);
    });
  });
};
