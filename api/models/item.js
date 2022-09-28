const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  category: {
    categoryId: {
      type: Number,
    },
    categoryName: {
      type: String,
      required: [true, "Category name is required"],
    },
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
  dateUpdated: {
    type: Date,
    default: new Date(),
  },
});
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
