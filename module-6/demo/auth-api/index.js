'use strict';

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'ADMIN',
    email: 'highlander.33@gmail.com',
    role: 'admin',
  },
  {
    id: 2,
    username: 'editor',
    password: 'EDITOR',
    email: 'highlander.22@gmail.com',
    role: 'editor',
  },
  {
    id: 3,
    username: 'writer',
    password: 'WRITER',
    email: 'highlander.44@gmail.com',
    role: 'writer',
  },
  {
    id: 4,
    username: 'guest',
    password: 'GUEST',
    email: 'highlander.00@gmail.com',
    role: 'guest',
  },
];

const roles = {
  admin: ['create', 'read', 'update', 'delete'],
  editor: ['read', 'update', 'delete'],
  writer: ['read', 'update'],
  guest: ['read'],
};


app.post('/login', (req, res) => {
  const {email} = req.body;
  const token = handleGetUser({email});
  const status = token ? 200 : 403;
  res.status(status).json({token});
});

function handleGetUser( search ) {
  // Does the search.username live in that array and does pw match?
  // Should be *yow will do this* make a db call
  const user = users.filter( u => {
    // Filter builds an array based on evaluating true
    return u.email === search.email;
  })[0];

  let token = null;
  if(user) {
    const data = {username: user.username, capabilities: roles[user.role] };
    token = jwt.sign(data, 'super-secret');
  }

  return token;

}

app.listen(PORT, console.log('Server Up'));
