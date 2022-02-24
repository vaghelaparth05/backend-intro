const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
  res.locals.validated = true;
  console.log(res.locals);
});

app.listen(3000);
console.log("server running @localhost:3000");
