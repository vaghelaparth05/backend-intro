const express = require("express");
let router = express.Router();

router.get("/profile", (req, res, next) => {
  res.send("Hello this is profile router");
});

module.exports = router;
