const Battery = require("../models/Battery");

// GET ALL
const getBatteries = async (req, res) => {
  try {
    const data = await Battery.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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


// CREATE
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
};

// UPDATE
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
      specs: {
        voltage: req.body.voltage,
        capacity: req.body.capacity,
        warranty: req.body.warranty,
        type: req.body.type,
      },
    };

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
};

// DELETE
const deleteBattery = async (req, res) => {
  try {
    await Battery.findByIdAndDelete(req.params.id);
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