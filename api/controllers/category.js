const Category = require("../models/category");
// const ItemController = require("./item");

const add = async (params) => {
  try {
    const category = new Category({
      name: params.name,
    });
    const newCategory = await category.save();
    return newCategory;
  } catch (err) {
    return err;
  }
};

const findAll = async () => {
  try {
    const categories = await Category.find({ isArchived: false });
    // add item details
    return categories;
  } catch (err) {
    return err;
  }
};

const findOne = async (name) => {
  try {
    const category = await Category.findOne({ name });
    // add items under selected category
    return category;
  } catch (err) {
    return err;
  }
};

const edit = async (params) => {
  try {
    const category = await Category.updateOne({ _id: params.id }, params);
    return { message: "Category edited.", data: category };
  } catch (err) {
    return err;
  }
};

const archive = async (params) => {
  try {
    const category = await Category.updateOne({ _id: params.id }, { isArchived: true });
    // add archiving to items under the category
    return { message: "Category deleted.", data: category };
  } catch (err) {
    return err;
  }
};

module.exports = { add, findAll, findOne, edit, archive };
