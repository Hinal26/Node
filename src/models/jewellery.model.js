const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
  {
    jewellery_name: {
      type: String,
      trim: true,
    },
    pieces: {
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

const Jewellery = mongoose.model("jewellery", jewellerySchema);
module.exports = Jewellery;