const notFound = (req, res) => {
  res.status(404).send("404 Route dose not exist :(");
};

module.exports = { notFound };
