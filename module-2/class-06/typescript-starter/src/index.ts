import dotenv from 'dotenv';
dotenv.config();
const port = Number(process.env.PORT) ?? 3000;

import server from './server';
import { db, dbInit } from './models/data_source';
import { seed } from './models/seed';

dbInit
  .then(async () => {
    if (process.env.NODE_ENV === 'dev') {
      await db.synchronize();
      await seed();
    }
    server.start(port);
  })
  .catch(console.error);
