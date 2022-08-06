'use strict';

const express = require('express');

function v1Router(collections) {
  const router = express.Router();
  for (const collection of collections) {
    console.log(`Building collection routes`, collection.model.name);
    const route = '/' + collection.model.name.toLowerCase();
    router.use(route, authRouter(collection));
  }

  return router;
}

function authRouter(collection) {
  const router = express.Router();

  function isAllowed(levels) {
    return function isAllowedMiddleware(req, res, next) {
      if (req.user && levels.includes(req.user.role)) {
        next();
      } else {
        res.status(401).send(`User has insufficient privileges`);
      }
    };
  }

  // RESTful Route Handlers
  async function handleGetAll(req, res) {
    let allRecords = await collection.read();
    res.status(200).json(allRecords);
  }

  async function handleGetOne(req, res) {
    const id = req.params.id;
    let theRecord = await collection.get(id);
    res.status(200).json(theRecord);
  }

  async function handleCreate(req, res, next) {
    let obj = req.body;
    let newRecord = await collection.create(obj);
    res.status(200).json(newRecord);
  }

  async function handleUpdate(req, res) {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await collection.update(id, obj);
    res.status(200).json(updatedRecord);
  }

  async function handleDelete(req, res) {
    let id = req.params.id;
    let deletedRecord = await collection.delete(id);
    res.status(200).json(deletedRecord);
  }

  // RESTful Route Declarations
  router.get(`/`, handleGetAll);
  router.get(`/:id`, handleGetOne);
  router.post(`/`, isAllowed(['writer', 'editor', 'admin']), handleCreate);
  router.put(`/:id`, isAllowed(['editor', 'admin']), handleUpdate);
  router.delete(`/:id`, isAllowed(['admin']), handleDelete);

  return router;
}

module.exports = v1Router;
