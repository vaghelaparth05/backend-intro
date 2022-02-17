const express = require("express");
const app = express();

app.all("*", (req, res) => {
  res.send(`<h1>Hello this is express server's homepage<h1>`);
});

app.listen(3000);
console.log("express server running at localhost:3000...");
