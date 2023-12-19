import { RequestHandler } from "./types";
import fs from "fs/promises";

const host = process.env.HOST;

const pageHandler: RequestHandler = async (req, res) => {
  if (!req.url) return res.end();

  const path = (() => {
    const path = new URL(req.url, host).pathname;
    if (path === "/") return "./index.html";
    return "./pages" + path;
  })();

  res.setHeader("Content-Type", "text/html");

  try {
    const pageData = await fs.readFile(path);
    res.statusCode = 200;
    res.write(pageData);
  } catch (error) {
    const pageData = await fs.readFile("./pages/404.html");
    res.statusCode = 404;
    res.write(pageData);
  }

  return res.end();
};

export default pageHandler;
