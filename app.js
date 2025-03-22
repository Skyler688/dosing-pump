const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<html><body><h1>Hello, World!</h1></body></html>");
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
