const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

console.log("🔥 AUTH ROUTES ACTIVE");

router.post("/login", (req, res) => {
  console.log("🔥 LOGIN API HIT");
  console.log("BODY RECEIVED:", req.body);

  const email = req.body?.email;
  const password = req.body?.password;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Body missing or wrong format",
    });
  }

  if (email === "admin@gmail.com" && password === "admin123") {
    return res.json({
      success: true,
      token: "demo-token",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

module.exports = router;