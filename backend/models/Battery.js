const mongoose = require("mongoose");

const batterySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    offerValidTill: String,

    image: {
      type: String,
      required: true,
    },

    description: String,

    features: {
      type: [String],
      default: [],
    },

    // ✅ FIXED
   specs: {
  type: Object,
  default: {},
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Battery", batterySchema);