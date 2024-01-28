import { Ingredient } from '../../shared/ingredient/ingredient.model';

export class Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: Ingredient[];

  constructor(
    name: string,
    description: string,
    image: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.ingredients = ingredients;
  }
}
