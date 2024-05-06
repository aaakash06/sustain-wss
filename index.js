import WebSocket from "ws";
import { createServer } from "http";
const WSS = "wss://hamro-chess-1.onrender.com";
const socket = new WebSocket(WSS);
socket.onopen = () => {
  console.log("connected... about to close connection");
  socket.close();
};

const timeInterval = 60 * 30 * 1000;
setInterval(() => {
  const socket = new WebSocket(WSS);
  socket.onopen = () => {
    console.log("connected... about to close connection");
    socket.close();
  };
}, timeInterval);

const server = createServer();
server.listen(3000, () => {
  console.log("server is listening");
});
