const Log = require("../models/logSchema");

const createLog = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const log = await Log.create(req.body);
    res.status(201).json({ message: "Log successfully created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Somthing went wrong, please try again" });
  }
};

module.exports = { createLog };
