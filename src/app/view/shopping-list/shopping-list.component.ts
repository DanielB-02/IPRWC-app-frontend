import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {UserStorageService} from "../../auth/user-storage.service";
import {ShopItem} from "../../model/shop-item";
import {ShoppingListItem} from "../../model/shopping-list-item";
import {ShopItemService} from "../../services/shop-item.service";
import {ShoppingListService} from "../../services/shopping-list.service";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  shoppingListItems: ShoppingListItem[];

  constructor(
    private shoppingListService: ShoppingListService,
    private snackBar: MatSnackBar,
    ) {
  }

  ngOnInit() {
    this.loadShoppingListItems()
  }

  private loadShoppingListItems() {
    // return this.shoppingListService.getShopItems();
    this.shoppingListService.readMyOrder().subscribe(items => {
      this.shoppingListItems = items;
    })
  }
  onOrderSubmit(): void {
    this.shoppingListService.confirmOrder().subscribe(() => {
      this.snackBar.open('Order Confirmed', 'MESSAGE', { duration: 5000 });
      this.loadShoppingListItems();
    });
  }

  // disableOrderButton() {
  //
  // }


  protected readonly UserStorageService = UserStorageService;
}
