const express = require("express");

const router = express.Router();
const ItemController = require("../controllers/item");

router.post("/add", (req, res) => {
  ItemController.add(req.body).then((result) => res.send(result));
});

router.get("/", (req, res) => {
  ItemController.findAll().then((items) => res.send(items));
});

router.get("/:id", (req, res) => {
  ItemController.findOne(req.params.id).then((item) => res.send(item));
});

router.put("/edit", (req, res) => {
  ItemController.edit(req.body).then((category) => res.send(category));
});

router.put("/delete", (req, res) => {
  ItemController.archive(req.body).then((result) => res.send(result));
});

module.exports = router;
