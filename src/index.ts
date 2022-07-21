import express from "express";
import WebSocketServer from './web-socket-server'

const app = express();
app.use(express.static('public'));

app.listen(8000, () => {
  console.log('Websocket server has been opened.');
});

const wss = new WebSocketServer(8001);