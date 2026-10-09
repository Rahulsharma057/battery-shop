
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

// Production frontend URL
const allowedOrigins = new Set([
  "https://battery-shop-wogs.vercel.app",
]);

// Allow the project's production and preview deployment domains.
function isAllowedOrigin(origin) {
  if (allowedOrigins.has(origin)) {
    return true;
  }

  try {
    const url = new URL(origin);

    if (url.protocol !== "https:") {
      return false;
    }

    const hostname = url.hostname.toLowerCase();

    // Vercel project deployment URLs:
    // battery-shop-wogs-git-main-....vercel.app
    // battery-shop-wogs-....vercel.app
    // battery-shop-wogs-p1ywk5sr6-rahulsharma057s-projects.vercel.app
    const isVercelDomain = hostname.endsWith(".vercel.app");

    if (!isVercelDomain) {
      return false;
    }

    const projectNameMatches =
      /^battery-shop-wogs(?:-[a-z0-9-]+)?$/.test(
        hostname.slice(0, -".vercel.app".length)
      );

    return projectNameMatches;
  } catch {
    return false;
  }
}

const corsOptions = {
  origin: (origin, callback) => {
    // Requests without Origin: Postman/server-to-server.
    if (!origin) {
      return callback(null, true);
    }

    if (isAllowedOrigin(origin)) {
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

// Error handler
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