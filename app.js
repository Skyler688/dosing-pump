require("dotenv").config();

const connectDB = require("./data_base/connect");
const router = require("./routes/send-get");
const page = require("./middleware/page");
const { notFound } = require("./middleware/error-handler");

const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
// use all static files in public dir.
app.get("/", page); // send public files to client
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use(router);

// route error middleware
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
