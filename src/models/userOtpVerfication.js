const mongoose = require("mongoose");

const userOtpSchema = mongoose.Schema({
  userId: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});

module.exports = mongoose.model('UserOTPVerification', userOtpSchema);
