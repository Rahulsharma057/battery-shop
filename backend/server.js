const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🔥 अगर DB use karna ho to enable karo
// connectDB();

console.log("🔥 SERVER STARTED");

// ✅ SIMPLE & SAFE CORS (recommended)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://battery-shop-wogs-fe595qpbc-rahulsharma057s-projects.vercel.app/admin/login",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// ✅ body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ routes
const authRoutes = require("./routes/authRoutes");
const batteryRoutes = require("./routes/batteryRoutes");

// ✅ health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🔥 Battery Shop API is running",
  });
});

// ✅ APIs
app.use("/api/admin", authRoutes);
app.use("/api/batteries", batteryRoutes);

// ❌ IMPORTANT: ye line hata di (ye crash kar rahi thi)
// app.options("*", cors());

// ✅ global error handler (extra safety)
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err.message);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// ✅ start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});