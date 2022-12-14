import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeServices } from './../recipe.services';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;
  constructor(
    private recipeService: RecipeServices,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
     .subscribe(
      (params: Params)=> {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
     );
  }
  
  onAddToShopL() {
   this.recipeService.addIngredientsToShopL(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
