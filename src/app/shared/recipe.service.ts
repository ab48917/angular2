import { Recipe } from '../recipe';
import { Ingredient } from './ingredient';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://i.ndtvimg.com/i/2015-09/indian-chinese-food-625_625x350_71441392015.jpg', [
    new Ingredient('French Fries', 2),
    new Ingredient('Cucumber', 5)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
    constructor() { }

   getRecipes() {
     return this.recipes;
   }

  getRecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
