require("colors");
require("dotenv").config();
const dbConnect = require("./utilities/dbConnect");
const port = process.env.PORT || 5000;
const app = require("./app");

// Connect to Database
dbConnect();

// Server
const server = app.listen(port, () => {
  console.log(`Rsquare Server Running on: ${port}`.blue.bold);
});

// unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION 💥", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
