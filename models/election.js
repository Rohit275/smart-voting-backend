const mongoose = require("mongoose");

const electionSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Date: { type: Date, required: true },
  StartTime: { type: String, required: true },
  EndTime: { type: String, required: true },
  Status: {type: String, required:true},
});

module.exports = mongoose.model("Election", electionSchema);
