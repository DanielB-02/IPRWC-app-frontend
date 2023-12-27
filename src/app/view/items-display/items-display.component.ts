import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {ShopItemService} from "../../services/shop-item.service";
import {ShopItem} from "../../model/shop-item";
import {UserStorageService} from "../../auth/user-storage.service";

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

  constructor(
    private shopItemService: ShopItemService) {
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
    // Implement your add to cart logic here
    console.log('Added to cart:', item);
  }

  protected readonly UserStorageService = UserStorageService;
}
