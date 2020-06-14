const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is listening to port ${port}...`);
});
