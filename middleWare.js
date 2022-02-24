const express = require("express");
const app = express();

function myfunction(req, res, next) {
  console.log("This is my function");
  // do somethings
  next();
}

function check(req, res, next) {
  console.log("This is check function");
  next();
}

app.use(myfunction);

app.use("/check", check);

app.get("/middleware", (req, res) => {
  res.end(`<h1>This is middleware homepage<h1>`);
});

app.listen(3000);
console.log("server running @localhost:3000");
