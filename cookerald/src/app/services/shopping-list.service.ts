import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../components/shared/ingredient/ingredient.model';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('tomato', 10),
    new Ingredient('tomater', 11),
  ];

  addIngredient(...ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit();
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  ingredientsChanged = new EventEmitter();
}
