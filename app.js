const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("hello world");
});

const start = async () => {
  try {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
