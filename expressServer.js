const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/dummy.html"));
});

app.all("*", (req, res) => {
  res.send(`<h1>Sorry! this page doesn't Exists.<h1>`);
});

app.listen(3000);
console.log("express server running at localhost:3000...");
