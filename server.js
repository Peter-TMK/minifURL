const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/minifURL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("Hi there!");
  res.render("index");
});

app.post("/shortenURL", (req, res) => {
  pass;
});

app.listen(PORT, () => {
  console.log("Server hit the ground running!");
});
