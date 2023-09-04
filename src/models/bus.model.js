const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    bus_name: {
      type: String,
      trim: true,
    },
    members: {
      type: Number,
      trim: true,
    },
    sheets: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    teavel: {
      type: mongoose.Types.ObjectId,
      ref: "travel"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Bus = mongoose.model("bus", busSchema);
module.exports = Bus;