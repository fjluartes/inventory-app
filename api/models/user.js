const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  birthDate: {
    type: Date,
    required: [true, 'Birth date is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  location: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  joinedOn: {
    type: Date,
    default: new Date()
  },
  userPosts: [
    {
      postId: {
        type: String,
        required: [true, 'postId is required']
      },
      postedOn: {
        type: Date,
        default: new Date()
      },
    }
  ]
});
const User = mongoose.model('User', userSchema);

module.exports = User;
