const { Users } = require('../../models/index');
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

async function signupUser(req, res) {
  try {
    let obj = req.body;
    let newUsers = await Users.create(obj);
    res.status(200).json(newUsers);
  } catch (e) {
    res.status(500).send(`Cannot create user ${req.body.username}`);
  }
}

async function signinUser(req, res) {
  try {
    const user = await Users.model.findOne({
      where: { username: req.body.username },
    });
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (isValid) {
      res.status(200).send({ user: user.username, token: user.token });
      return;
    }
  } catch (e) {
    // Nothing
  }
  res
    .status(403)
    .send(
      "Invalid username/password. Too bad we don't have an account recovery mechanism."
    );
}

router.post('/signup', signupUser);
router.post('/signin', signinUser);

module.exports = router;
