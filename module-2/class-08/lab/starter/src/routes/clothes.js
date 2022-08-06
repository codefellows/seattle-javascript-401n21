'use strict';

const express = require('express');
const validateToken = require('../middleware/auth/auth');

const clothesCollection = require('../models/index.js').Clothes;

const router = express.Router();

// RESTful Route Declarations
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', validateToken, createClothes);
router.put('/clothes/:id', validateToken, updateClothes);
router.delete('/clothes/:id', validateToken, deleteClothes);

// RESTful Route Handlers
async function getClothes(req, res) {
  let allClothes = await clothesCollection.read();
  res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
  let id = req.params.id;
  let theClothes = await clothesCollection.read(id);
  res.status(200).json(theClothes);
}

async function createClothes(req, res) {
  if (!req.user || req.user.role !== 'admin') {
    res.status(401).send('Cannot do this');
  } else {
    let obj = req.body;
    let newClothes = await clothesCollection.create(obj);
    res.status(200).json(newClothes);
  }
}

async function updateClothes(req, res) {
  let id = req.params.id;
  const obj = req.body;
  let updatedClothes = await clothesCollection.update(id, obj);
  res.status(200).json(updatedClothes);
}

async function deleteClothes(req, res) {
  let id = req.params.id;
  let deletedClothes = await clothesCollection.delete(id);
  res.status(200).json(deletedClothes);
}

module.exports = router;
