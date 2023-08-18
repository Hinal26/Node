const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      book_name: {
        type: String,
        trim: true,
      },
      book_dis: {
        type: String,
        trim: true,
      },
      book_price:{
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
  
  const User = mongoose.model("users", userSchema);
  module.exports = User;