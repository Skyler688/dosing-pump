const mongoose = require("mongoose");

const Esp32 = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  ip: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Esp32 devices", Esp32);
