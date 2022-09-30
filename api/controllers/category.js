const Category = require("../models/category");

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

const edit = (params) => {
  try {
    const category = Category.updateOne({ _id: params.id }, params);
    return category;
  } catch (err) {
    return err;
  }
};

const archive = (params) => {
  try {
    const category = Category.updateOne({ _id: params.id }, { isArchived: true });
    // add archiving to items under the category
    return { message: "Category deleted.", data: category };
  } catch (err) {
    return err;
  }
};

module.exports = [add, findAll, findOne, edit, archive];
