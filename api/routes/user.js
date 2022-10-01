const express = require("express");

const router = express.Router();
const UserController = require("../controllers/user");
const auth = require("../auth");

router.post("/add", async (req, res) => {
  try {
    const user = await UserController.add(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/details", auth.verify, async (req, res) => {
  try {
    const user = auth.decode(req.headers.authorization);
    const userDetails = await UserController.findOne({ userId: user.id });
    res.status(200).send(userDetails);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await UserController.login(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/edit", async (req, res) => {
  try {
    const user = await UserController.edit(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/delete", async (req, res) => {
  try {
    const result = await UserController.archive(req.body);
    res.status(200).send(result.message);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
