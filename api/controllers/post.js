const Post = require("../models/post");

module.exports.add = (params) => {
  const post = new Post({
    post: params.post,
    userId: params.userId,
  });

  return post.save().then((err) => {
    return !err;
  });
};

module.exports.getAll = () => {
  return Post.find({}).then((posts) => {
    return posts;
  });
};
