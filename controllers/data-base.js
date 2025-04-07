const logSchema = require("../models/logSchema");

const createLog = async (req, res) => {
  try {
    // console.log("Received data:", req.body);
    const log = await logSchema.create(req.body);
    res.status(201).json({ message: "Log successfully created", log });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Somthing went wrong, please try again: ${error.me}` });
  }
};

const deleteAll = async (req, res) => {
  try {
    const result = await logSchema.deleteMany();

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No logs to delete" });
    }

    res.status(201).json({ message: "Successfully deleted logs" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Somthing went wrong, please try agian" });
  }
};

module.exports = { createLog, deleteAll };
