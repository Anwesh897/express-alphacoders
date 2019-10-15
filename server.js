const express = require("express");
const app = express();

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
