const UserSchema = require("../models/User");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;

    const user = await UserSchema.findOne({ username });

    if (!user) {
      console.log("no user found");
      return res.status(401);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.render("home", { title: "Home Page", username: username });
  } catch (error) {
    console.error(error);
  }
};

const loginPage = (req, res) => {
  try {
    const errorMessage = req.session.errorMessage;

    req.session.errorMessage = null;

    res.render("login", { errorMessage: errorMessage });
  } catch (error) {
    console.error(error);
  }
};

const login = (req, res) => {
  try {
    const { user } = req.body;
    res.redirect("/home", { user });
  } catch (error) {
    console.error(error);
  }
};

const regesterPage = (req, res) => {
  try {
    const errorMessage = req.session.errorMessage;

    req.session.errorMessage = null;

    res.render("regester", { errorMessage: errorMessage });
  } catch (error) {
    console.error(error);
  }
};

const regester = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await UserSchema.create({
        username,
        password: hashedPassword,
      });
      res.redirect("/"); // pass in the username if possible.
    } catch (error) {
      if (error.code === 11000) {
        req.session.errorMessage = "Username already exists, please try again.";
        return res.redirect("/regester");
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Somthing went wrong, please try again" });
  }
};

module.exports = { home, loginPage, login, regesterPage, regester };
