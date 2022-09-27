const User = require('../models/user');
const auth = require('../auth');
const bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);

module.exports.register = (params) => {
  let hash = bcrypt.hashSync(params.password, salt);
  let user = new User({
    name: params.name,
    username: params.username,
    email: params.email,
    birthDate: params.birthDate,
    password: hash
  });
  return user.save().then((user, err) => {
    return (err) ? false : true;
  });
};

module.exports.get = (params) => {
  return User.findById(params.userId).then(user => {
    user.password = undefined;
    return user;
  });
};

module.exports.login = (params) => {
  return User.findOne({ username: params.username }).then(user => {
    if (user === null) return false;
    const isPasswordMatched = bcrypt.compareSync(params.password, user.password);
    if (isPasswordMatched) {
      return { access: auth.createAccessToken(user.toObject()) };
    } else {
      return false;
    }
  });
};
