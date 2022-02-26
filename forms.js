const express = require("express");
const helmet = require("helmet");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

app.use(helmet());
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("form");
});

app.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (password === "d") {
    res.cookie("username", username);
    res.redirect("/welcome");
  } else {
    res.redirect("/?msg=fail");
  }
});

app.get("/welcome", (req, res, next) => {
  res.render("welcome", {
    username: req.cookies.username,
  });
});

app.get("/logout", (req, res, next) => {
  res.clearCookie("username");
  res.redirect("/");
});

app.listen(3000);
console.log("server running @localhost:3000");
