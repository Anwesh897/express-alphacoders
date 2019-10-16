const express = require("express");
const jsxViews = require("express-react-views").createEngine();
const dotenv = require("dotenv").config();
const request = require("request");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", jsxViews);
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  res.json({
    name: "Anwesh Korram",
    instrument: "Guitar",
    hobbies: "Reading books and Composing music",
    favBook: "Harry Potter Series, It , Twilight...",
    favAuthor: "J.K Rowling, Stephen King, Stephenie Meyer..."
  });
});

const apikey = process.env.API_key;
const url = `https://wall.alphacoders.com/api2.0/get.php?auth=${apikey}&method`;

app.get("/alphacoders", (req, res) => {
  request({ url: url }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", msg: err.message });
    }
    const data = JSON.parse(body).wallpapers[0].url_image;
    res.render("alphacoders", { data: `${data}` });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
