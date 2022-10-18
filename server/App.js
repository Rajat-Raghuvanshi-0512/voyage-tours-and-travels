<<<<<<< HEAD
const express = require("express")
const app = express()

//Config path
if (process.env.NODE_ENV !== "PRODUCTION") {
    require('dotenv').config({ path: "server/Config/config.env" })
}

module.exports = app;
=======
const express = require("express");
const app = express();

//Config path
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/Config/config.env" });
}

module.exports = app;
>>>>>>> 90a2a39ecdccd456e6f96ec13c53a026bad704c3
