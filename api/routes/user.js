const express = require("express");

const router = express.Router();
const UserController = require("../controllers/user");
const auth = require("../auth");

router.post("/add", (req, res) => {
  UserController.add(req.body).then((result) => res.send(result));
});

router.get("/details", auth.verify, (req, res) => {
  const user = auth.decode(req.headers.authorization);
  UserController.findOne({ userId: user.id }).then((result) => res.send(result));
});

router.post("/login", (req, res) => {
  UserController.login(req.body).then((result) => res.send(result));
});

router.put("/edit", (req, res) => {
  UserController.edit(req.body).then((category) => res.send(category));
});

router.put("/delete", (req, res) => {
  UserController.archive(req.body).then((result) => res.send(result));
});

module.exports = router;
