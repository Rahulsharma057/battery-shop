const mongoose = require("mongoose");

const batterySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    offerValidTill: String,

image: { type: String, default: "" },

    description: String,

    features: { type: [String], default: [] },

    // ✅ FIXED (IMPORTANT)
    specs: {
      voltage: { type: String, default: "" },
      capacity: { type: String, default: "" },
      warranty: { type: String, default: "" },
      type: { type: String, default: "" },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Battery", batterySchema);