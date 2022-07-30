'use strict';

const express = require('express');

const usersCollection = require('../models/index.js').Users;

const router = express.Router();

// RESTful Route Declarations
router.get('/users/:id', getOneUsers);
router.post('/users', createUsers);

// RESTful Route Handlers
async function getOneUsers(req, res) {
  let id = req.params.id;
  let theUsers = await usersCollection.read(id);
  res.status(200).json(theUsers);
}

async function createUsers(req, res) {
  let obj = req.body;
  let newUsers = await usersCollection.create(obj);
  res.status(200).json(newUsers);
}

module.exports = router;
