const express = require("express");
const router = express.Router();

const {
  home,
  loginPage,
  login,
  regesterPage,
  regester,
} = require("../controllers/user");

router.route("/").get(loginPage);
router.route("/login").post(login);
router.route("/home").post(home);
router.route("/regester").get(regesterPage);
router.route("/regester").post(regester);

module.exports = router;
