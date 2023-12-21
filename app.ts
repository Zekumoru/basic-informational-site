import "dotenv/config";
import { createServer } from "node:http";
import pageHandler from "./handlers/pageHandler";

const localHostname = process.env.LOCAL_HOSTNAME;
const localHost = process.env.LOCAL_HOST;
const port = Number(process.env.PORT);

const server = createServer(async (req, res) => {
  return await pageHandler(req, res);
});

server.listen(port, localHostname, () => {
  console.log(`Listening on ${localHost}:${port}`);
});
