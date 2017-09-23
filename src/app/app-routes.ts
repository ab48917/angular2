import { RECIPE_ROUTE } from './recipes/recipe-router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES: Routes = [
 { path: '', redirectTo: '/recipes', pathMatch: 'full'},
 { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTE },
 { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
