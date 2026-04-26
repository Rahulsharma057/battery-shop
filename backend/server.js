const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const batteryRoutes = require("./routes/batteryRoutes");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/api/batteries", batteryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});