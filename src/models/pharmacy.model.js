const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
  {
    vitamins_medications: {
      type: String,
      trim: true,
    },
    packets: {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Pharmacy = mongoose.model("pharmacy", pharmacySchema);
module.exports = Pharmacy;