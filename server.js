const express = require("express");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

app.use("/", function (req, res) {
  res.render("index");
});

app.listen(8000, function (err) {
  if (err) console.error("error...");
  console.info("Server is active");
});
