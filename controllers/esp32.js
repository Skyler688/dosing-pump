const axios = require("axios");
const Esp32Schema = require("../models/Esp32");

const check = async (req, res) => {
  try {
    console.log("Esp status check receved");
    res.status(200).json({ message: "hello esp" });
  } catch (error) {
    console.error(error);
  }
};

// Takes info from the esp32 devices and checks if they exist, if they dont it creates a device in the data base.
// In the event of a ip or avalability change the data base will be updated. NOTE FOR FUTURE REFRENCE -> the avalible boolean will dictate weather to display the device on the site.
const esp32Info = async (req, res) => {
  try {
    console.log("Info: ", req.body);
    const { id, ip, available } = req.body;

    const device = await Esp32Schema.findOne({ id });

    if (!device) {
      console.log("Device not found, creating new device...");
      const createDevice = await Esp32Schema.create(req.body);
      if (!createDevice) {
        console.log("Error creating device");
        res.status(500).json({ message: "Error creating device" });
      } else {
        res.status(200).json({ message: "Created new device" });
      }
    }

    let updated = false;
    if (device.ip !== ip) {
      device.ip = ip;
      updated = true;
    }
    if (device.available !== available) {
      device.available = available;
      updated = true;
    }

    if (updated) {
      await device.save();
      res.status(200).json({ message: "Device updated" });
    } else {
      res
        .status(200)
        .json({ message: "Device already exists and is up to date" });
    }
  } catch (error) {
    console.error(error);
  }
};

const sendToEsp = async (req, res) => {
  try {
    console.log("Sending request to esp32");
    const response = await axios.get("http://192.168.1.122:80");
    console.log("Response from ESP:", response.data);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error making Get requests");
  }
};

const sendSchedual = async (req, res) => {
  try {
    console.log("Sending schedual to esp32");
    const response = await axios.post(
      "http://192.168.1.122:80/schedual",
      req.body
    );
    console.log("ESP32 Response: ", response.data);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error making post request");
  }
};

module.exports = { check, esp32Info, sendToEsp, sendSchedual };
