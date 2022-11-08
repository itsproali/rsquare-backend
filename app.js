const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRoute");
const imageRoute = require("./routes/imageRoute");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", userRoute);
app.use("/image", imageRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to MVC Pattern Server..!");
});

// Not Found Route
app.get("*", (req, res) => {
  res.send(404).send({ message: "Route Not Found" });
});

module.exports = app;
