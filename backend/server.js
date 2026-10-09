
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

// Allowed production frontend + Vercel preview deployments
const allowedOrigins = [
  "https://battery-shop-wogs.vercel.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests without Origin, such as Postman/server-to-server.
    if (!origin) {
      return callback(null, true);
    }

    // Exact production domain
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Allow only this project's Vercel deployment URLs.
    // Example: battery-shop-wogs-git-main-....vercel.app
    const isAllowedVercelPreview =
      /^https:\/\/battery-shop-wogs(?:-[a-z0-9-]+)?-rahulsharma057s-projects\.vercel\.app$/i.test(
        origin
      ) ||
      /^https:\/\/battery-shop-wogs-[a-z0-9-]+\.vercel\.app$/i.test(
        origin
      );

    if (isAllowedVercelPreview) {
      return callback(null, true);
    }

    return callback(new Error("Origin not allowed by CORS"));
  },

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

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
  if (err.message === "Origin not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "Origin not allowed by CORS",
    });
  }

  console.error("UNHANDLED ERROR:", err?.stack || err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});