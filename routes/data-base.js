const express = require("express");
const router = express.Router();

// controler functions
const { createLog, deleteAll } = require("../controllers/data-base");

router.route("/log").post(createLog);
router.route("/delete").delete(deleteAll);

module.exports = router;
