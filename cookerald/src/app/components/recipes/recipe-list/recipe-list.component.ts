import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

const dummyRecipes: Recipe[] = [
  new Recipe(
    "'oop",
    "'lueberry 'nd 'oop",
    'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  new Recipe(
    "'oon",
    "'oonin 'ard",
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
];

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [...dummyRecipes];

  addRecipe(name: string, desription: string, image: string) {
    const recipe = new Recipe(name, desription, image);
    this.recipes.push(recipe);
  }
}
