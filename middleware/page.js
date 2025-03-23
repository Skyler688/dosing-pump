const path = require("path");

const sendPage = async (err, req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
};

module.exports = sendPage;
