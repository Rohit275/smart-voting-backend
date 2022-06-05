const mongoose = require("mongoose");

const sensorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Status: String,
});

module.exports = mongoose.model("Sensor", sensorSchema);
