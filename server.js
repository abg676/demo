const express = require("express");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

app.use("/", function (req, res) {
  res.render("index");
});

app.use("/env", function(req, res) {
	res.send({env: process.env.NODE_ENV})
});

app.listen(8000, function (err) {
  if (err) console.error("error...");
  console.info("Server is active");
});
