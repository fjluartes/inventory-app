const Item = require("../models/item");

module.exports.add = (params) => {
  const item = new Item({
    name: params.name,
    description: params.description,
    category: params.category,
  });
  // add to category collection
  return item.save().then((err) => {
    return !err;
  });
};

module.exports.findAll = () => {
  return Item.find({}).then((items) => {
    return items;
  });
};

module.exports.findOne = (params) => {
  return Item.findOne({ _id: params.id }).then((item) => {
    return item;
  });
};

module.exports.edit = (params) => {
  return Item.updateOne({ _id: params.id }, params).then((item) => {
    return item;
  });
};

module.exports.archive = (params) => {
  return Item.updateOne({ _id: params.id }, { isArchived: true }).then(() => {
    return { message: "Item deleted." };
  });
};
