import express from "express";
import path from "path";

const indexRouter = express.Router();

indexRouter.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

indexRouter.get("/about", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});

indexRouter.get("/contact-me", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact-me.html"));
});

indexRouter.use("/", express.static("public"));

indexRouter.use("/", (_req, res) => {
  res.statusCode = 404;
  res.sendFile(path.join(__dirname, "../public/404.html"));
});

export default indexRouter;
