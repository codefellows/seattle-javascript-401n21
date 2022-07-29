// All middleware has access to the request.

import { Handler } from 'express';

// Here, we're simply logging out the interesting parts
const logger: Handler = (req, res, next) => {
  console.log('REQUEST:', req.method, req.path);

  // Call next() so that the next function in line can do it's work
  next();
};

export default logger;
