import { Recipe } from '../../recipe';
import { RecipeService } from '../../shared/recipe.service';
import { ShoppingListService } from '../../shopping-list.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
// @Input() selectedRecipe: Recipe
  selectedRecipe: Recipe
  private recipeIndex: number;
  private subscription: Subscription;
  constructor(private sls: ShoppingListService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipesService: RecipeService) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
    (data: any) => {
      this.recipeIndex = data['id'];
      this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
    }
    );
  }

onAddToShoppingList() {
this.sls.addItems(this.selectedRecipe.ingredients);
}
  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
 this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
