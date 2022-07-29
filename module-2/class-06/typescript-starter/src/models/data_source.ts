import dotenv from 'dotenv';
import { Clothes } from './clothes/clothes_model';
import { Food } from './food/food_model';
dotenv.config();

import { DataSource, DataSourceOptions } from 'typeorm';
import { Recipe } from './recipe/recipe_model';

const dbOptions: DataSourceOptions = ['dev', 'test'].includes(
  process.env.NODE_ENV as string
)
  ? {
      type: 'sqlite',
      database: ':memory:',
    }
  : {
      type: 'postgres',
      url: process.env.DATABASE_URL,
    };

export const db = new DataSource({
  ...dbOptions,
  entities: [Food, Clothes, Recipe],
  synchronize:
    process.env.NODE_ENV === 'dev' || Boolean(process.env.SYNC_DB) || false,
  logging: process.env.NODE_ENV === 'dev',
});

export const dbInit = db
  .initialize()
  .then(() => {
    console.log('DataSource initialized', dbOptions);
  })
  .catch((e: unknown) => {
    console.error('Failed to initialize DataSource', dbOptions, e);
    process.exit(1);
  });
