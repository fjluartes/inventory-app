const Category = require("../models/category");
const Item = require("../models/item");
const ItemController = require("./item");

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

const edit = async (params) => {
  try {
    const oldCategory = await Category.findOne({ _id: params.id });
    const category = await Category.updateOne({ _id: params.id }, params);
    const items = await ItemController.findAllByCategory({ name: oldCategory.name });
    items.forEach(async (item) => {
      await Item.updateOne(
        { _id: item._id },
        {
          category: {
            categoryId: params.id,
            categoryName: params.name,
          },
        },
      );
    });
    return { message: "Category edited.", data: category };
  } catch (err) {
    return err;
  }
};

const archive = async (params) => {
  try {
    const oldCategory = await Category.findOne({ _id: params.id });
    const category = await Category.updateOne({ _id: params.id }, { isArchived: true });
    const items = await ItemController.findAllByCategory({ name: oldCategory.name });
    items.forEach(async (item) => {
      await Item.updateOne({ _id: item._id }, { isArchived: true });
    });
    return { message: "Category deleted.", data: category };
  } catch (err) {
    return err;
  }
};

module.exports = { add, findAll, findOne, edit, archive };
