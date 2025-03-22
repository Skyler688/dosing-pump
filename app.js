const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/data", (req, res) => {
  console.log("Received data:", req.body);
  res.send({ message: "data received" });
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
