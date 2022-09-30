const bcrypt = require("bcrypt");
const User = require("../models/user");
const auth = require("../auth");

const salt = bcrypt.genSaltSync(10);

const add = async (params) => {
  try {
    const hash = bcrypt.hashSync(params.password, salt);
    const user = new User({
      name: params.name,
      username: params.username,
      email: params.email,
      password: hash,
    });
    const newUser = await user.save();
    console.log(newUser);
    return newUser;
  } catch (err) {
    return err;
  }
};

const findOne = async (params) => {
  try {
    const user = await User.findById(params.userId);
    return user;
  } catch (err) {
    return err;
  }
};

const login = async (params) => {
  try {
    const user = await User.findOne({ username: params.username });
    if (user === null) return false;
    const isPasswordMatched = bcrypt.compareSync(params.password, user.password);
    if (isPasswordMatched) {
      return { access: auth.createAccessToken(user.toObject()) };
    }
    return false;
  } catch (err) {
    return err;
  }
};

const edit = async (params) => {
  try {
    const user = await User.updateOne({ _id: params.id }, params);
    return user;
  } catch (err) {
    return err;
  }
};

const archive = async (params) => {
  try {
    const user = await User.updateOne({ _id: params.id }, { isArchived: true });
    return { message: "User deleted.", data: user };
  } catch (err) {
    return err;
  }
};

module.exports = [add, findOne, login, edit, archive];
