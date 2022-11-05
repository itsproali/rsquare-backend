require("colors");
require("dotenv").config();
const dbConnect = require("./utilities/dbConnect");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;
const app = require("./app");

// Connect to Database
dbConnect();

// Server
app.listen(port, () => {
  console.log(`Rsquare Server Running on: ${port}`.blue.bold);
});

// Handle Error
app.use(errorHandler);
