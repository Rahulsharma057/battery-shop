const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());

// ✅ BODY PARSING FIX
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

console.log("🔥 SERVER STARTED");

const authRoutes = require("./routes/authRoutes");
const batteryRoutes = require("./routes/batteryRoutes");

app.use("/api/admin", authRoutes);
app.use("/api/batteries", batteryRoutes);

app.listen(5000, () => {
  console.log("🚀 Running on 5000");
});