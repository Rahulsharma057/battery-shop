const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//connectDB();

console.log("🔥 SERVER STARTED");

// ✅ CORS FIX (IMPORTANT FOR VERCEL + RENDER)
const allowedOrigins = [
  "http://localhost:3000",
  "https://battery-shop-wogs-fe595qpbc-rahulsharma057s-projects.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ routes
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

// ✅ IMPORTANT: fallback OPTIONS (must be AFTER routes)
app.options("*", cors());

app.listen(PORT, () => {
  console.log("🚀 Running on", PORT);
});