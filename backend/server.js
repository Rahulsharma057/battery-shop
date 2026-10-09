const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET missing in env");
}
if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  throw new Error("ADMIN_EMAIL / ADMIN_PASSWORD missing in env");
}

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS: open origin because this is a public read API with a small admin surface
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require("./routes/authRoutes");
const batteryRoutes = require("./routes/batteryRoutes");

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Battery Shop API is running",
  });
});

app.use("/api/admin", authRoutes);
app.use("/api/batteries", batteryRoutes);

app.use((err, req, res, next) => {
  console.error("UNHANDLED ERROR:", err?.stack || err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});