const express = require("express");
const app = express();

//Config path
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/Config/config.env" });
}

module.exports = app;
