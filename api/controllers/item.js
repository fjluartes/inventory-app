const Item = require("../models/item");

module.exports.add = (params) => {
  const item = new Item({
    post: params.post,
    userId: params.userId,
  });

  return item.save().then((err) => {
    return !err;
  });
};

module.exports.getAll = () => {
  return Item.find({}).then((items) => {
    return items;
  });
};
