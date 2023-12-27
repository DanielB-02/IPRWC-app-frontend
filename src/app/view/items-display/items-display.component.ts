import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {ShopItemService} from "../../services/shop-item.service";
import {ShopItem} from "../../model/shop-item";
import {UserStorageService} from "../../auth/user-storage.service";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ShoppingListItem} from "../../model/shopping-list-item";

@Component({
  selector: 'app-items-display',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './items-display.component.html',
  styleUrl: './items-display.component.scss'
})
export class ItemsDisplayComponent {
  shopItems: ShopItem[];
  shoppingListItem: ShoppingListItem;

  constructor(
    private shopItemService: ShopItemService,
    private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.loadShopItems()
  }

  public isLoggedIn() {
    // return UserStorageService.isCustomerLoggedIn();
    return false;
  }

  private loadShopItems() {
    // return this.shopItemService.getShopItems();
    this.shopItemService.getShopItems()
      .subscribe(shopItems => {
        this.shopItems = shopItems;
    })
  }

  addToCart(item: any): void {
    console.log('Added to cart:', item);
    this.shoppingListService.addItemToOrder(item).subscribe(() => {
      console.log('call executed');
    });
    // this.shoppingListService.addItemToOrder(item).subscribe(() => {
    //   console.log('call executed');
    // });
  }

  protected readonly UserStorageService = UserStorageService;
}
