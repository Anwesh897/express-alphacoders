const express = require("express");
const jsxViews = require("express-react-views").createEngine();
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
