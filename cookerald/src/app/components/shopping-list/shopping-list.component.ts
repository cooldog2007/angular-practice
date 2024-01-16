import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('tomato', 10),
    new Ingredient('tomater', 11),
  ];

  addIngredient(name: string, amount: number) {
    const ingredient = new Ingredient(name, amount);
    this.ingredients.push(ingredient);
  }
}
