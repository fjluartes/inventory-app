const Item = require("../models/item");
// const CategoryController = require("./category");

const add = async (params) => {
  try {
    const item = new Item({
      name: params.name,
      description: params.description,
      quantity: params.quantity,
      category: params.category,
    });
    // add to category collection
    const newItem = await item.save();
    return newItem;
  } catch (err) {
    return err;
  }
};

const findAll = async () => {
  try {
    const items = await Item.find({});
    return items;
  } catch (err) {
    return err;
  }
};

const findOne = async (params) => {
  try {
    const item = await Item.findOne({ _id: params.id });
    return item;
  } catch (err) {
    return err;
  }
};

const edit = async (params) => {
  try {
    const item = await Item.updateOne({ _id: params.id }, params);
    return { message: "Item edited.", data: item };
  } catch (err) {
    return err;
  }
};

const archive = async (params) => {
  try {
    const item = await Item.updateOne({ _id: params.id }, { isArchived: true });
    return { message: "Item deleted.", data: item };
  } catch (err) {
    return err;
  }
};

module.exports = { add, findAll, findOne, edit, archive };
