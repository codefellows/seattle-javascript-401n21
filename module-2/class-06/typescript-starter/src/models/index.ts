import { db } from './data_source';
import { Collection } from './data_collection';
import { Food } from './food/food_model';
import { Clothes } from './clothes/clothes_model';
import { Recipe } from './recipe/recipe_model';

export const FoodRepository = db.getRepository(Food);
export const ClothesRepository = db.getRepository(Clothes);
export const RecipeRepository = db.getRepository(Recipe);

export const FoodCollection = new Collection(FoodRepository, 'Food');
export const ClothesCollection = new Collection(ClothesRepository, 'Clothes');
export const RecipeCollection = new Collection(RecipeRepository, 'Recipe');
// FoodCollection.belongsToManyThrough(RecipeCollection, FoodRecipeModel);
// RecipeCollection.belongsToManyThrough(FoodCollection, FoodRecipeModel);
