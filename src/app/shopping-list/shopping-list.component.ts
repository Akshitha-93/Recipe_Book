import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListServices } from './shopping-list.services';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients:Ingredient[] ;
  private igChangeSub: Subscription;

  constructor(private slServices: ShoppingListServices) { }

  ngOnInit(){
    this.ingredients = this.slServices.getIngredients();
    this.igChangeSub = this.slServices.ingredientsChanged
     .subscribe(
        (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
     );
  }

  onEditItem(index: number){
    this.slServices.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe( );
  }

}
function next(next: any, arg1: (ingredients: Ingredient[]) => void): typeof Subscription {
  throw new Error('Function not implemented.');
}

