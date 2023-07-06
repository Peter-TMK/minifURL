const express = require("express");
const mongoose = require("mongoose");
const MinifyURL = require("./models/minifyURL");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/minifURL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await MinifyURL.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortenURL", async (req, res) => {
  await MinifyURL.create({ fullURL: req.body.fullurl });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await MinifyURL.findOne({ shortURL: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.fullURL);
});

app.listen(PORT, () => {
  console.log("Server hit the ground running!");
});
