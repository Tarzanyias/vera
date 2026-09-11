import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import express from "express";
import { createServer } from "node:http";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("WISP Relay active!");
});

const server = createServer(app);

server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

server.listen(PORT, () => {
  console.log(`WISP server active on port ${PORT}`);
});
