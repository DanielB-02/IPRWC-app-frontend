import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {ShopItem} from "../model/shop-item";
import {ShoppingListItem} from "../model/shopping-list-item";

const BASIC_URL = environment['BASIC_URL'];

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private shoppingListUrl: string;

  constructor(private http: HttpClient) {
    this.shoppingListUrl = BASIC_URL + 'order'
  }

  readMyOrder(): Observable<ShoppingListItem[]> {
    const url = `${this.shoppingListUrl}`
    return this.http.get<ShoppingListItem[]>(url);
  }

  addItemToOrder(product: ShopItem): Observable<void> {
    const url = `${this.shoppingListUrl}`;
    return this.http.post<void>(url+ '/product/' + product.id, '');
  }
}
