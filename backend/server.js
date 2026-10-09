
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

const app = express();
const PORT = process.env.PORT || 5000;

// Only your production frontend and this project's Vercel deployments
const allowedOrigins = new Set([
  "https://battery-shop-wogs.vercel.app",
]);

function isAllowedOrigin(origin) {
  if (allowedOrigins.has(origin)) {
    return true;
  }

  try {
    const url = new URL(origin);

    if (url.protocol !== "https:") {
      // Permit local development separately.
      return (
        url.origin === "http://localhost:3000" ||
        url.origin === "http://localhost:3001"
      );
    }

    const hostname = url.hostname.toLowerCase();

    // Allow deployments belonging to this Vercel project only.
    // Examples:
    // battery-shop-wogs-git-main-rahulsharma057s-projects.vercel.app
    // battery-shop-wogs-p1ywk5sr6-rahulsharma057s-projects.vercel.app
    // battery-shop-wogs-<deployment-id>.vercel.app
    return (
      /^battery-shop-wogs(?:-[a-z0-9-]+)?\.vercel\.app$/.test(
        hostname
      )
    );
  } catch {
    return false;
  }
}

const corsOptions = {
  origin(origin, callback) {
    // Requests without Origin, such as server-to-server requests.
    if (!origin) {
      return callback(null, true);
    }

    if (isAllowedOrigin(origin)) {
      console.log("[CORS ALLOWED]", origin);
      return callback(null, true);
    }

    console.warn("[CORS BLOCKED]", origin);

    // Do not throw an error that hides the actual route response.
    return callback(null, false);
  },

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
  maxAge: 86400,
};

// CORS middleware must run before routes and body parsers.
app.use(cors(corsOptions));

// Explicit preflight handling for Express 4.
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect database and handle connection failures in your DB module.
connectDB();

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

// Handle unexpected application errors.
app.use((err, req, res, next) => {
  console.error(
    "[API ERROR]",
    err?.stack || err
  );

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express API running on port ${PORT}`);
});