const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: { type: String, required: true },
  // Username: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  // Phone: { type: Number, required: true },
  Finger: {type: String, required: true},
  FingerID: String,
  Voted: Boolean
});

module.exports = mongoose.model("Users", userSchema);
