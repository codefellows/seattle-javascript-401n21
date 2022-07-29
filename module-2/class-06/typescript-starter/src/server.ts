import express from 'express';
import { RouteCollection } from './models/collection_router';

// Our own custom modules
import notFoundHandler from './error-handlers/404';
import errorHandler from './error-handlers/500';
import logger from './middleware/logger';

import { ClothesCollection, FoodCollection } from './models';
import { dbInit } from './models/data_source';

export const server = express();

// Express Global Middleware
server.use(express.json());

// Our own Global Middleware
server.use(logger);

// Use our routes from the routing module...
server.use('/food', new RouteCollection(FoodCollection).router);
server.use('/clothes', new RouteCollection(ClothesCollection).router);

// Our Error Handlers -- need to be the last things defined!
// These use the external modules we required above
server.use('*', notFoundHandler);
server.use(errorHandler);

// Export an object with the express app and separate method that can start the server
export function start(port: number) {
  if (!port) {
    throw new Error('Missing Port');
  }
  dbInit.then(() => {
    server.listen(port, () => console.log(`Listening on ${port}`));
  });
}

export default {
  server,
  start,
};
