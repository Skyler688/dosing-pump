// import models hear.

const path = require("path");

const sendPage = async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
};

module.exports = {
  sendPage,
};
