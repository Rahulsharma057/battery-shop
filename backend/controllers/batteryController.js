const Battery = require("../models/Battery");

/* ---------------- FEATURES ---------------- */
const parseFeatures = (features) => {
  if (!features) return [];

  if (typeof features === "string") {
    return features.split(",").map((f) => f.trim());
  }

  if (Array.isArray(features)) return features;

  return [];
};

/* ---------------- SPECS SAFE HANDLER ---------------- */
const safeSpecs = (specs) => {
  const defaultSpecs = {
    voltage: "",
    capacity: "",
    warranty: "",
    type: "",
  };

  if (!specs) return defaultSpecs;

  if (typeof specs === "string") {
    try {
      const parsed = JSON.parse(specs);
      return { ...defaultSpecs, ...parsed };
    } catch (e) {
      return defaultSpecs;
    }
  }

  if (typeof specs === "object" && !Array.isArray(specs)) {
    return { ...defaultSpecs, ...specs };
  }

  return defaultSpecs;
};

/* ---------------- GET ALL ---------------- */
const getBatteries = async (req, res) => {
  try {
    const data = await Battery.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- CREATE ---------------- */
const addBattery = async (req, res) => {
  try {
    const battery = new Battery({
      name: req.body.name,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      discount: req.body.discount,
      rating: req.body.rating,
      reviews: req.body.reviews,
      offerValidTill: req.body.offerValidTill,

      image: req.file?.path || req.body.image || "",

      description: req.body.description,
      features: parseFeatures(req.body.features),
      specs: safeSpecs(req.body.specs),
    });

    const saved = await battery.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- UPDATE ---------------- */
const updateBattery = async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      discount: req.body.discount,
      rating: req.body.rating,
      reviews: req.body.reviews,
      offerValidTill: req.body.offerValidTill,
      description: req.body.description,
      features: parseFeatures(req.body.features),
      specs: safeSpecs(req.body.specs),
    };

    if (req.file) {
      updateData.image = req.file.path;
    } else if (req.body.image) {
      updateData.image = req.body.image;
    }

    const updated = await Battery.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Battery not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- DELETE ---------------- */
const deleteBattery = async (req, res) => {
  try {
    const deleted = await Battery.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Battery not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBatteries,
  addBattery,
  updateBattery,
  deleteBattery,
};