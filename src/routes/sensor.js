require('dotenv').config();

const express = require("express");
const Users = require("../models/user");
const Sensor= require("../models/sensor")

const router = express.Router();

router.get("/getSensor", (req, res, next) => {
  Sensor.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: "Sensor Details Fetched succesfully",
      category: documents,
    });
  });
});

router.put("/updateSensor/:id", (req, res, next) => {
  //console.log("In updateform :", req.body, req.params.id);
  Sensor.updateOne(
    { _id: req.params.id },
    {
      Status: req.body.status
    }
  ).then((result) => {
    console.log("Update succesful!");
    res.status(200).json({ message: "Update succesful!" });
  });
});


module.exports = router;
