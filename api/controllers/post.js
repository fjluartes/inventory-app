const Post = require('../models/post');

module.exports.add = (params) => {
  let post = new Post({
    post: params.post,
    userId: params.userId
  });

  return post.save().then((user, err) => {
    return (err) ? false : true;
  });
};

module.exports.getAll = () => {
  return Post.find({}).then(posts => {
    return posts;
  });
};
