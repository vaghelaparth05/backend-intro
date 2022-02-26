const express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello this is homepage router");
});

module.exports = router;
