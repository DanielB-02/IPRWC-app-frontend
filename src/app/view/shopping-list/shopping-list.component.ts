import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {UserStorageService} from "../../auth/user-storage.service";
import {ShopItem} from "../../model/shop-item";
import {ShoppingListItem} from "../../model/shopping-list-item";
import {ShopItemService} from "../../services/shop-item.service";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  shoppingListItems: ShoppingListItem[];

  constructor(
    private shoppingListService: ShoppingListService) {
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


  protected readonly UserStorageService = UserStorageService;
}
