const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: [true, 'Post is required']
  },
  userId: {
    type: String,
    required: [true, 'userId is required']
  },
  postedOn: {
    type: Date,
    default: new Date()
  },
  likeCount: {
    type: Number,
    default: 0
  },
  repost: [
    {
      postId: {
        type: String,
        required: [true, 'postId is required']
      },
    }
  ]
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
