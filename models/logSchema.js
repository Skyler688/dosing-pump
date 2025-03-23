const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Button-Logs", logSchema);
