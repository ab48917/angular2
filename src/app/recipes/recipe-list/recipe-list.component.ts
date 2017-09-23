import { Recipe } from '../../recipe';
import { Ingredient } from '../../shared/ingredient';
import { RecipeService } from '../../shared/recipe.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
 recipe: Recipe;
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  // recipe= new Recipe('Dummy', 'Dummy', 'http://sifatit.com/wp-content/uploads/2012/07/dummy.jpg');

  constructor(private recipeService: RecipeService) { }
  ngOnInit() {
   this.recipes = this.recipeService.getRecipes();
  }


  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
   }
}
