import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import express from "express";
import { createServer } from "node:http";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("*", (req, res) => {
  res.send("WISP Relay active!");
});

const server = createServer(app);

// Direct all WebSocket upgrade requests into WISP
server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

server.listen(PORT, () => {
  console.log(`WISP server listening on port ${PORT}`);
});
