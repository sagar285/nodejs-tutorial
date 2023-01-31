const express = require("express");
const path = require("path");
const app = express();
const router = require("./router");

// const pathdir = path.join(__dirname, "public");
// app.use(express.static(pathdir));

app.set("view engine", "ejs");
app.use(router);

app.listen(3000, () => {
  console.log("server established");
});
