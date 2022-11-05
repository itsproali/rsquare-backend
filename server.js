require("colors");
require("dotenv").config();
const dbConnect = require("./utilities/dbConnect");
const errorHandler = require("./middleware/errorHandler")
const port = process.env.PORT || 5000;
const app = require("./app");

// Connect to Database
dbConnect();

// Handle Catch Error
app.use(errorHandler);

// Server
app.listen(port, () => {
  console.log(`MVC Server Running on: ${port}`.blue.bold);
});
