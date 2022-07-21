import { WebSocketServer } from "ws";

export default class {
  private wss;
  
  constructor(port: number) {
    this.wss = new WebSocketServer({port});
    this.run();
  }

  private run() {
    this.wss.on("connection", (ws, request) => {
      ws.on("message", (data) => {
        console.log(`Received from user: ${data}`);
        this.wss.clients.forEach((client) => {
          client.send(`${data} : ${new Date()}`);
        })
      });

      ws.on("close", () => {
        this.wss.clients.forEach((client) => {
          client.send(`One user has left. current user number ${this.wss.clients.size}`);
        })
      })

      ws.send(`Welcome, please have a conversation with other users.`);
    });
  }
}