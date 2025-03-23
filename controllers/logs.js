const createLog = (req, res) => {
  console.log("Received data:", req.body);

  let status = "off";
  if (req.body.number_of_clicks % 2 === 1) {
    status = "on";
  }

  res.send({ message: "data received", light: status });
};

module.exports = { createLog };
