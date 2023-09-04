const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
  {
    music_name: {
      type: String,
      trim: true,
    },
    singers: {
      type: Number,
      trim: true,
    },
    viewers: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    movie: {
      type: mongoose.Types.ObjectId,
      ref: "movie"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Music = mongoose.model("music", musicSchema);
module.exports = Music;