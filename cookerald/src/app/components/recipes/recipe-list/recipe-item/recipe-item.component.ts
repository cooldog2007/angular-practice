import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../../../services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe | null = null;

  constructor(private recipesService: RecipesService) {}

  onRecipeClick() {
    if (this.recipe) {
      this.recipesService.recipeChange.emit(this.recipe);
    }
  }
}
