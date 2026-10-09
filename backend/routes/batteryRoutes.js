const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const requireAdmin = require("../middleware/auth");

const {
  getBatteries,
  addBattery,
  updateBattery,
  deleteBattery,
} = require("../controllers/batteryController");

// routes
router.get("/", getBatteries);
router.post("/", requireAdmin, upload.single("image"), addBattery);
router.put("/:id", requireAdmin, upload.single("image"), updateBattery);
router.delete("/:id", requireAdmin, deleteBattery);

module.exports = router;
