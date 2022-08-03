import { Subject } from 'rxjs';
import { ShoppingListServices } from '../shopping-list/shopping-list.services';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable()

export class RecipeServices {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mutton Ghee roast recipe',
      'This is a south-Indian recipe with Ghee being the star of the dish.',
      'https://www.giggsmeat.com/wp-content/uploads/2021/11/recipe-of-mutton-ghee-roast.jpg',
      [
        new Ingredient('Mutton', 1),
        new Ingredient('Yogurt', 1),
        new Ingredient('Dry Red Chillies', 6),
        new Ingredient('Tamarind Paste', 1),
        new Ingredient('Ghee', 1),
        new Ingredient('Curry leaves', 2),
        new Ingredient('Jaggery', 1 / 2),
        new Ingredient('Whole Black Peppercorns', 9),
        new Ingredient('Fenugreek Seeds', 1/2),
        new Ingredient('Cloves', 2),
        new Ingredient('Coriander Seeds', 2),
        new Ingredient('Garlic cloves', 6),
        new Ingredient('Salt', 1),
        new Ingredient('Cumin seeds', 1),
      ]
    ),
    new Recipe(
      'Butter Chicken',
      'Popularly known for its rich texture,is a type of curry made from chicken with spiced tomato and butter sauce.',
      'https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2020/10/pepper-delight-butter-chicken-1-scaled.jpg?fit=1979%2C2560&ssl=1',
      [
        new Ingredient('Boneless chicken', 1),
        new Ingredient('Yogurt', 1),
        new Ingredient('Ginger Garlic Paste', 1),
        new Ingredient('Turmeric Powder', 1),
        new Ingredient('Dry Red Chillies', 6),
        new Ingredient('Garam masala powder', 1 / 2),
        new Ingredient('Butter(Salted)', 1),
        new Ingredient('Coriander Powder', 1),
        new Ingredient('Homemade tomato puree', 1),
        new Ingredient('Honey', 1),
        new Ingredient('Salt', 1),
      ]
    ),
    new Recipe(
      'Tandoori Chicken',
      'Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour.',
      'https://therecipecritic.com/wp-content/uploads/2020/02/tandoorichicken-667x1000.jpg',
      [
        new Ingredient('Chicken thighs', 10),
        new Ingredient('Mustard oil', 4),
        new Ingredient('Charcoal , small pieces', 3),
        new Ingredient('Greek Yogurt', 1 / 2),
        new Ingredient('Ginger Garlic Paste', 1),
        new Ingredient('Garam masala powder', 1 / 2),
        new Ingredient('Coriander Powder', 1),
        new Ingredient('Dry Red Chillies', 6),
        new Ingredient('Chaat Masala Powder', 1),
        new Ingredient('Salt', 1),
      ]
    ),
    new Recipe(
      'Mutton Biryani',
      'An Indian dish that comes in set of rice-based foods made with spices, rice (usually basmati) and meat, fish, eggs or vegetables. The name comes from the Persian word beryā(n) which means "fried" or "roasted".',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOL_sc1b6BEt9GJ5HlMGJm2eF01nM1vbehsQ&usqp=CAU',
      [
        new Ingredient('Ginger Garlic Paste', 1),
        new Ingredient('Green Chillies', 7),
        new Ingredient('Bay leaves',2),
        new Ingredient('Cardamom Pods', 2),
        new Ingredient('Cinnamon Stick', 2),
        new Ingredient('Cloves', 3),
        new Ingredient('Basmati rice', 2),
        new Ingredient('Mutton ', 1),
        new Ingredient('Greek Yogurt', 1),
        new Ingredient('Red Chilli powder', 1),
        new Ingredient('Garam masala powder', 1),
        new Ingredient('Spices', 7)
      ]
    ),
  ];

  // private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListServices){}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  
  addIngredientsToShopL(ingredients: Ingredient[]){
     this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
 
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
