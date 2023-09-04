const mongoose = require("mongoose");

const stationarySchema = new mongoose.Schema(
  {
    stationary_name: {
      type: String,
      trim: true,
    },
    products: {
      type: Number,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Stationary = mongoose.model("stationary", stationarySchema);
module.exports = Stationary;