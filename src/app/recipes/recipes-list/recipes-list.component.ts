import { Subscription } from 'rxjs/Subscription';
import { RecipeServices } from '../recipe.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeServices,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) =>{
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }
  
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
