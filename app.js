const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const imageRoute = require("./routes/imageRoute");
const errorHandler = require("./middleware/errorHandler");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Rsquare Server..!");
});

// Routes
app.use("/user", userRoute);
app.use("/image", imageRoute);
app.use("/images", express.static(__dirname + "/images/"));

// Not Found Route
app.get("*", (req, res) => {
  res.sendStatus(404).send({ message: "Route Not Found" });
});

// Handle Error
app.use(errorHandler);

module.exports = app;
