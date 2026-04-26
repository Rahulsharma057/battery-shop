const express = require("express");
const router = express.Router();
const Battery = require("../models/Battery");

// 👇 multer import (CommonJS way)
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// ✅ Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "batteries",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });
const parseFeatures = (features) => {
  if (!features) return [];

  if (typeof features === "string") {
    return features.split(",").map((f) => f.trim());
  }

  if (Array.isArray(features)) {
    return features;
  }

  return [];
};

// ✅ GET ALL
router.get("/", async (req, res) => {
  const data = await Battery.find();
  res.json(data);
});


// ✅ ADD (IMAGE UPLOAD)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const battery = new Battery({
      name: req.body.name,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      discount: req.body.discount,

      // 🔥 Cloudinary image URL
      image: req.file ? req.file.path : "",

      description: req.body.description,
         features: parseFeatures(req.body.features),

      specs: {
        voltage: req.body.voltage,
        capacity: req.body.capacity,
        warranty: req.body.warranty,
        type: req.body.type,
      },
    });

    const saved = await battery.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ DELETE
router.delete("/:id", async (req, res) => {
  await Battery.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
});


// ✅ UPDATE (WITH IMAGE)
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      discount: req.body.discount,
      description: req.body.description,
          features: parseFeatures(req.body.features),

      specs: {
        voltage: req.body.voltage,
        capacity: req.body.capacity,
        warranty: req.body.warranty,
        type: req.body.type,
      },
    };

    // ✅ image update only if new file
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updated = await Battery.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;