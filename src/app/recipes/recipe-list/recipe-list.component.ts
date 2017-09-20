import { Recipe } from '../../recipe';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
 recipe: Recipe;
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://i.ndtvimg.com/i/2015-09/indian-chinese-food-625_625x350_71441392015.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  // recipe= new Recipe('Dummy', 'Dummy', 'http://sifatit.com/wp-content/uploads/2012/07/dummy.jpg');

  constructor() { }

  ngOnInit() {
  }


  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
   }
}
