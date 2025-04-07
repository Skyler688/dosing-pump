require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const PORT = 4000;

const connectDB = require("./data_base/connect");
const dataBaseRouter = require("./routes/data-base");
const esp32Router = require("./routes/esp32");
const viewsRouter = require("./routes/user");
const { notFound } = require("./middleware/error-handler");

// middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  session({
    secret: "buck is a good dogo",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.use("/", viewsRouter);
app.use("/data", dataBaseRouter);
app.use("/esp32", esp32Router);

// route error middleware not found
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}\n`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
