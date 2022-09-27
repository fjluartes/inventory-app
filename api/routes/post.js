const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post');

router.post('/addPost', (req, res) => {
  PostController.add(req.body).then(result => res.send(result));
});

router.get('/allPosts', (req, res) => {
  PostController.getAll().then(posts => res.send(posts));
});

module.exports = router;
