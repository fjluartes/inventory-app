const bcrypt = require("bcrypt");
const User = require("../models/user");
const auth = require("../auth");

const salt = bcrypt.genSaltSync(10);

module.exports.add = (params) => {
  const hash = bcrypt.hashSync(params.password, salt);
  const user = new User({
    name: params.name,
    username: params.username,
    email: params.email,
    password: hash,
  });
  return user.save().then((err) => {
    return !err;
  });
};

module.exports.findOne = (params) => {
  return User.findById(params.userId).then((user) => {
    // user.password = null;
    return user;
  });
};

module.exports.login = (params) => {
  return User.findOne({ username: params.username }).then((user) => {
    if (user === null) return false;
    const isPasswordMatched = bcrypt.compareSync(params.password, user.password);
    if (isPasswordMatched) {
      return { access: auth.createAccessToken(user.toObject()) };
    }
    return false;
  });
};

module.exports.edit = (params) => {
  return User.updateOne({ _id: params.id }, params).then((user) => {
    return user;
  });
};

module.exports.archive = (params) => {
  return User.updateOne({ _id: params.id }, { isArchived: true }).then(() => {
    return { message: "User deleted." };
  });
};
