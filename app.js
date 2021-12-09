const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", async function (req, res) {
  res.render("home");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});

