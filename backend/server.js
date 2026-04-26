const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

console.log("🔥 SERVER STARTED");

// ✅ CORS CONFIG
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ SAFE OPTIONS HANDLER (NO "*")
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// ✅ BODY PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
const authRoutes = require("./routes/authRoutes");
const batteryRoutes = require("./routes/batteryRoutes");

// HOME
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🔥 Battery Shop API is running",
  });
});

app.use("/api/admin", authRoutes);
app.use("/api/batteries", batteryRoutes);

// START SERVER
app.listen(PORT, () => {
  console.log("🚀 Running on", PORT);
});