const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  items: [
    {
      itemId: {
        type: String,
      },
      itemName: {
        type: String,
      },
    },
  ],
  dateCreated: {
    type: Date,
    default: new Date(),
  },
  dateUpdated: {
    type: Date,
    default: new Date(),
  },
});
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
