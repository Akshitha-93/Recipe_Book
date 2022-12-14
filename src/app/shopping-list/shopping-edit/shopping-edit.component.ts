import { Subscription } from 'rxjs/Subscription';
import { ShoppingListServices } from './../shopping-list.services';
import { Ingredient } from './../../shared/ingredients.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f', {static: false}) slForm: NgForm;
 subscription: Subscription;
 editMode = false;
 editedItemIndex: number; 
 editedItem: Ingredient;

 constructor(private slServices: ShoppingListServices) { }

  ngOnInit(): void {
    this.subscription = this.slServices.startedEditing
    .subscribe(
      (index: number) =>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slServices.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
 onSubmit(form: NgForm){
   const value = form.value;
   const newIngredient = new Ingredient(value.name, value.amount);
   if(this.editMode) {
    this.slServices.updateIngredient(this.editedItemIndex, newIngredient);
   } else{
   this.slServices.addIgredient(newIngredient);
   }
   this.editMode = false;
   form.reset();
   }

   onClear(){
    this.slForm.reset();
    this.editMode = false; 
   }
   onDelete(){
    this.slServices.DeleteIngredient(this.editedItemIndex);
    this.onClear();
   }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
