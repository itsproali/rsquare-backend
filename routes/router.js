const express = require("express");
const router = require("express").Router();
const userRoute = require("./userRoute");
const imageRoute = require("./imageRoute");

// Default Route
router.get("/", (req, res) => {
  res.send("Welcome to Rsquare Server..!");
});

// Routes
router.use("/user", userRoute);
router.use("/image", imageRoute);
router.use("/images", express.static(__dirname + "/images/"));

module.exports = router;
