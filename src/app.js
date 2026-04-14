const express = require("express");
const app = express();
//const connectDB = require("./config/db");
const portfolioRoutes = require("./routes/portfolioRoutes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api", portfolioRoutes);
// Connect to MongoDB

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
