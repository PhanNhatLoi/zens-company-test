// server.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");

const port = process.env.SERVER_PORT || 5000;

//router
app.use("/api", require("./Server/router"));

// connect mongoDB
const URI = process.env.MONGODB_URI + process.env.DB_NAME;
// Kết nối với MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB:", err);
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
