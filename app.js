const express = require("express");
const cors = require("cors");
const app = express();
const testRoute = require("./routes/test.route");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/test", testRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to MVC Pattern Server..!");
});

// Not Found Route
app.get("*", (req, res) => {
  res.send(404).send({ message: "Route Not Found" });
});

module.exports = app;
