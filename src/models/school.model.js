const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    school_name: {
      type: String,
      trim: true,
    },
    student: {
      type: Number,
      trim: true,
    },
    teacher: {
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

const School = mongoose.model("school", schoolSchema);
module.exports = School;