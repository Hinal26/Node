const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
  {
    mobile_name: {
      type: String,
      trim: true,
    },
    peace: {
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

const Mobile = mongoose.model("mobile", mobileSchema);
module.exports = Mobile;