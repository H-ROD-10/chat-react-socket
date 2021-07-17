const express = require("express");

const app = express();
const http = require("http").createServer(app);
const { chat } = require("./controllers/chat.controller");

app.get("/api", (req, res) => {
  res.status(200).json({
    data: "Hello from node-websocket",
  });
});

http.listen(4000, () => console.log("Server running"));
chat(http);
