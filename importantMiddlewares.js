const express = require("express");
const express = require("helmet");
const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
  console.log(req.body, "hello");
  res.json(`POST METHOD INVOKED`);
});

app.listen(3000);
console.log("server running @localhost:3000");
