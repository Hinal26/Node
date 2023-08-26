const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    movie_name: {
      type: String,
      trim: true,
    },
    tickets: {
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

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;