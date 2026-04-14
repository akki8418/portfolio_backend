const express = require("express");
const app = express();
//const connectDB = require("./config/db");
const portfolioRoutes = require("./routes/portfolioRoutes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api", portfolioRoutes);
// Connect to MongoDB

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
