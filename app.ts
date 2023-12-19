import "dotenv/config";
import { createServer } from "node:http";
import pageHandler from "./handlers/pageHandler";

const hostname = process.env.HOSTNAME;
const host = process.env.HOST;
const port = Number(process.env.PORT);

const server = createServer(async (req, res) => {
  return await pageHandler(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Listening on ${host}:${port}`);
});
