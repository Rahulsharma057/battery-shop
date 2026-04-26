const express = require("express");
const router = express.Router();

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const {
  getBatteries,
  addBattery,
  updateBattery,
  deleteBattery,
} = require("../controllers/batteryController");

// Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "batteries",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

// routes
router.get("/", getBatteries);
router.post("/", upload.single("image"), addBattery);
router.put("/:id", upload.single("image"), updateBattery);
router.delete("/:id", deleteBattery);

module.exports = router;