const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (token) {
    const user = jwt.verify(token, SECRET);
    req.user = user;
  }
  next();
}

module.exports = validateToken;
