const express = require("express");
const path = require("path");
const helmet = require("helmet");
const router = require("./myrouter");
const profileRouter = require("./profileRouter");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", router);
app.get("/profile", profileRouter);

app.listen(3000);
console.log("Server listening @http://localhost:3000/");
