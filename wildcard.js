const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("wildcard");
});

app.get("/story/:storyId", (req, res, next) => {
  res.send(
    `Your story is blah blah blah... Story Number : ${req.params.storyId}`
  );
});

app.get("/story/:storyId/:paraId", (req, res, next) => {
  res.send(`Going to where ever you want : ${req.params.storyId}`);
});

app.listen(3000);
console.log("Server listening @http://localhost:3000/");
