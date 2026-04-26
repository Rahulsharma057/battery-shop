const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// ✅ BODY PARSING FIX
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

console.log("🔥 SERVER STARTED");

const authRoutes = require("./routes/authRoutes");
const batteryRoutes = require("./routes/batteryRoutes");

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🔥 Battery Shop API is running",
  });
});
app.use("/api/admin", authRoutes);
app.use("/api/batteries", batteryRoutes);

app.listen(PORT, () => {
  console.log("🚀 Running on", PORT);
});