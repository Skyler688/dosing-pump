const express = require("express");
const router = express.Router();

const {
  // controler functions
  createLog,
} = require("../controllers/logs");

const { sendPage } = require("../controllers/page");

router.route("/").get(sendPage);
router.route("/log").post(createLog);
// router.route("/post-log").post(createLog);
// router.route("/get-logs").get(getLogs);

module.exports = router;
