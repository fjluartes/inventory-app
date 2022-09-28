const Category = require("../models/category");

module.exports.add = (params) => {
  const category = new Category({
    name: params.name,
  });
  return category.save().then((err) => {
    return !err;
  });
};

module.exports.findAll = () => {
  return Category.find({ isArchived: false }).then((categories) => {
    return categories;
  });
};

module.exports.findOne = (name) => {
  return Category.findOne({ name }).then((category) => {
    // add items under selected category
    return category;
  });
};

module.exports.edit = (params) => {
  return Category.updateOne({ _id: params.id }, params).then((category) => {
    return category;
  });
};

module.exports.archive = (params) => {
  return Category.updateOne({ _id: params.id }, { isArchived: true }).then(() => {
    // add archiving to items under the category
    return { message: "Category deleted." };
  });
};
