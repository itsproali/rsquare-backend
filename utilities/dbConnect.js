const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log(`DB connection successful! at ${new Date().toLocaleString()}`);
  } catch (err) {
    console.log("something went wrong with db connection");
    console.log(err);
  }
};

module.exports = dbConnect;
