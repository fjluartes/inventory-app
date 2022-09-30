const express = require("express");

const router = express.Router();
const CategoryController = require("../controllers/category");

router.post("/add", (req, res) => {
  CategoryController.add(req.body).then((result) => res.send(result));
});

router.get("/", (req, res) => {
  CategoryController.findAll().then((categories) => res.send(categories));
});

router.get("/:name", (req, res) => {
  CategoryController.findOne(req.params.name).then((categories) => {
    return res.send(categories);
  });
});

router.put("/edit", (req, res) => {
  CategoryController.edit(req.body).then((category) => res.send(category));
});

router.put("/delete", (req, res) => {
  CategoryController.archive(req.body).then((result) => res.send(result));
});

module.exports = router;
