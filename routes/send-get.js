const express = require("express");
const router = express.Router();

// controler functions
const { createLog } = require("../controllers/logs");

// arduino serial functions
const sendToArduino = require("../serial/connect");

router.route("/log").post(sendToArduino, createLog);

module.exports = router;
