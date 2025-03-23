const { SerialPort } = require("serialport");
const path = require("path");

// const portPath = "/dev/cu.usbmodem143101"; // development machine port
const portPath = "/dev/ttyACM0";

const port = new SerialPort({
  path: portPath,
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

port.on("open", () => {
  console.log("Serial Port Connected");
});

port.on("error", () => {
  console.log("Error opening serial port:", err.massage);
});

const sendToArduino = (req, res, next) => {
  const data = req.body.status;
  if (port.isOpen) {
    port.write(data, (err) => {
      if (err) {
        console.error("Error writing to serial port");
      } else {
        console.log("Data sent to arduino\n");
        next(); // pass to create log
      }
    });
  } else {
    console.log("Serial port is not open");
  }
};

module.exports = sendToArduino;
