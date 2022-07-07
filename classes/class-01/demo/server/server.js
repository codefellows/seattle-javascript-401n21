"use strict";

const express = require("express");

const stamper = require("./middleware/stamper.js");

const notFoundHandler = require("./handlers/codes/404.js");
const errorHandler = require("./handlers/codes/500.js");

const hello = require("./handlers/hello.js");
const evenodd = require("./handlers/evenodd.js");
const bad = require("./handlers/bad");

const app = express();

app.get("/", stamper, hello);
app.get("/data", stamper, evenodd);
app.get("/bad", stamper, bad);

app.use("*", notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`));
}

module.exports = {
  app: app,
  start: start,
};
