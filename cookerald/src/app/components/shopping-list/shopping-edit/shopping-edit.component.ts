import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild('inputName') nameElement: ElementRef | null = null;
  @ViewChild('inputAmount') amountElement: ElementRef | null = null;

  addItem() {
    if (!this.nameElement || !this.amountElement) return;
    const newIngredient = {
      name: this.nameElement.nativeElement.value,
      amount: this.amountElement.nativeElement.value,
    };
    this.shoppingListService.addIngredient(newIngredient);
  }
}
