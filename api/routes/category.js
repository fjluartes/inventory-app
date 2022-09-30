const express = require("express");

const router = express.Router();
const CategoryController = require("../controllers/category");

router.post("/add", async (req, res) => {
  try {
    const result = await CategoryController.add(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await CategoryController.findAll();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:name", async (req, res) => {
  try {
    const categories = CategoryController.findOne(req.params.name);
    res.status(200).send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/edit", async (req, res) => {
  try {
    const category = await CategoryController.edit(req.body);
    res.status(200).send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/delete", async (req, res) => {
  try {
    const result = await CategoryController.archive(req.body);
    res.status(200).send(result.message);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
