const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE);
};

module.exports = dbConnect;
