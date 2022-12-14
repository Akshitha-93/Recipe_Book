import { RecipeServices } from './recipes/recipe.services';
import { DataStorageService } from './shared/data-storage.service';
import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, 
    Resolve, 
    RouterStateSnapshot 
} from "@angular/router";

import { Recipe } from "./recipes/recipe.model";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
  private dataStorageService: DataStorageService,
   private recipeServices: RecipeServices
   ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipeServices.getRecipes();

        if (recipes.length === 0) {
           return this.dataStorageService.fetchRecipes();
        } else {
            return recipes;
        }
    }
  
}