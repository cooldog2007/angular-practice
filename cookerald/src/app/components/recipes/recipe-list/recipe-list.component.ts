import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
}
