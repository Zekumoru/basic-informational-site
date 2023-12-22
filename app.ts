import "dotenv/config";
import express from "express";
import indexRouter from "./routes/indexRouter";

const hostname = process.env.HOSTNAME ?? "localhost";
const host = process.env.HOST ?? "http://localhost";
const port = Number(process.env.PORT ?? 8080);

const app = express();

app.use(indexRouter);

app.listen(port, hostname, () => {
  console.log(`Listening on ${host}:${port}`);
});
