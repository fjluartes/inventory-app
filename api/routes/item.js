const express = require("express");

const router = express.Router();
const ItemController = require("../controllers/item");

router.post("/add", async (req, res) => {
  try {
    const item = await ItemController.add(req.body);
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await ItemController.findAll();
    // const items = await ItemController.findAllByCategory({ name: "Phones" });
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await ItemController.findOne(req.params.id);
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/edit", async (req, res) => {
  try {
    const item = await ItemController.edit(req.body);
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/delete", async (req, res) => {
  try {
    const result = await ItemController.edit(req.body);
    res.status(200).send(result.message);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
