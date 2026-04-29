const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
 const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

 connectDB();

console.log("🔥 SERVER STARTED");

// ✅ ✅ FINAL CORS FIX (VERY IMPORTANT)
app.use(
  cors({
    origin: true, // 🔥 sabko allow karega (Vercel preview bhi)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);



// ✅ Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
const authRoutes = require("./routes/authRoutes");
const batteryRoutes = require("./routes/batteryRoutes");

// ✅ Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🔥 Battery Shop API is running",
  });
});

// ✅ APIs
app.use("/api/admin", authRoutes);
app.use("/api/batteries", batteryRoutes);

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 FULL ERROR:", err);
console.error("🔥 STACK:", err?.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});