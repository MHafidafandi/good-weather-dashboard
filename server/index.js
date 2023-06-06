const express = require("express");
const app = express();
// const path = require("path");
require("dotenv").config();
var cors = require("cors");

const port = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (ENV == "production") {
  app.use(express.static("../client/bulid"));
}

app.use("/api/cities", require("../api/cities.js"));
app.use("/api/weathers", require("../api/weathers.js"));

app.listen(port, (err, res) => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
