const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const sensorRoutes = require("./routes/sensor");
const app = express();
var cors = require("cors");

app.use(cors());

const conn = mongoose
  .connect(
    "mongodb+srv://admin:" +
      process.env.MONGODB_ATLAS_PWD +
      "@voting-system.ijzf4re.mongodb.net/Voting?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to Mongo DB...", err));
// console.log(conn);
// const conn = mongoose
//   .connect("mongodb://localhost/Smart-voting")
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch((err) => console.error("Could not connect to Mongo DB...", err));
//

// let UserModel;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:Qwerty%40123@voting-system.ijzf4re.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   let User = client.db("Voting").collection("users");
//   UserModel = User
//   console.log("Connected");
//   // perform actions on the collection object
//   client.close();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/sensors", sensorRoutes);

module.exports = app;
