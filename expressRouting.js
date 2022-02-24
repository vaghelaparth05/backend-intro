const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello this is a "GET" response from server<h1>`);
});

app.post("/", (req, res) => {
  res.send(`<h1>Hello this is a "POST" response from server<h1>`);
});

app.delete("/", (req, res) => {
  res.send(`<h1>Hello this is a "DELETE" response from server<h1>`);
});

app.put("/", (req, res) => {
  res.send(`<h1>Hello this is a "PUT/UPDATE" response from server<h1>`);
});

app.listen(3000);
console.log("server running @localhost:3000");
