const express = require("express");
const router = express.Router();

const {
  // controler functions
  createLog,
} = require("../controllers/logs");

router.route("/log").post(createLog);

module.exports = router;
