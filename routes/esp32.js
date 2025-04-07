const express = require("express");
const router = express.Router();

const {
  check,
  esp32Info,
  sendToEsp,
  sendSchedual,
} = require("../controllers/esp32");

router.route("/check").get(check);
router.route("/sendInfo").post(esp32Info);
router.route("/send").get(sendToEsp);
router.route("/sendSchedual").post(sendSchedual);

module.exports = router;
