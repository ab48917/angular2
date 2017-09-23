import { RecipeStartComponent } from '../recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { Routes, RouterModule } from '@angular/router';
export const RECIPE_ROUTE: Routes = [
  { path: '', component: RecipeStartComponent },
  { path: 'new', component: RecipeEditComponent },
  { path: ':id', component: RecipeDetailComponent },
  { path: ':id/edit', component: RecipeEditComponent }
];

