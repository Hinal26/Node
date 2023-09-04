const mongoose = require("mongoose");
const Category = require("./category.model");

const bookSchema = new mongoose.Schema(
  {
    book_name: {
      type: String,
      trim: true,
    },
    book_dis: {
      type: String,
      trim: true,
    },
    book_price: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    Category : {
      type : mongoose.Types.ObjectId,
      ref : "category"
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Book = mongoose.model("book", bookSchema);
module.exports = Book;