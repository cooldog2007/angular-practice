import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipesService } from '../../../services/recipes.service';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css',
})
export class RecipeBookComponent implements OnInit {
  constructor(
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService
  ) {}
  recipe: Recipe | null = null;

  ngOnInit() {
    this.recipesService.recipeChange.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }

  toShoppingList() {
    if (!this.recipe) return;

    this.shoppingListService.addIngredient(...this.recipe.ingredients);
  }
}
