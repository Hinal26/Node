const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
  {
    Place: {
      type: String,
      trim: true,
    },
    Members: {
      type: Number,
      trim: true,
    },
    Fees: {
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

const Travel = mongoose.model("travel", travelSchema);
module.exports = Travel;