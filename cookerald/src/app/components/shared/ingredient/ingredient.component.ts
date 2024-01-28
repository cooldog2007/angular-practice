import { Component, Input } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.css',
})
export class IngredientComponent {
  @Input() ingredient: Ingredient | null = null;
}
