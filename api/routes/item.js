const express = require("express");

const router = express.Router();
const ItemController = require("../controllers/item");

router.post("/add", (req, res) => {
  ItemController.add(req.body).then((result) => res.send(result));
});

router.get("/", (req, res) => {
  ItemController.getAll().then((items) => res.send(items));
});

module.exports = router;
