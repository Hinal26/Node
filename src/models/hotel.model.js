const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    hotel_name: {
      type: String,
      trim: true,
    },
    table: {
      type: Number,
      trim: true,
    },
    waiter: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    travel: {
      type: mongoose.Types.ObjectId,
      ref: "travel"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Hotel = mongoose.model("hotel", hotelSchema);
module.exports = Hotel;