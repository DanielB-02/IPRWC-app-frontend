import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {ShopItem} from "../model/shop-item";

const BASIC_URL = environment['BASIC_URL'];

@Injectable({
  providedIn: 'root'
})
export class ShopItemService {
  private shopItemUrl: string;

  constructor(private http: HttpClient) {
    this.shopItemUrl = BASIC_URL + 'public/shop-item'
  }

  getShopItems(): Observable<ShopItem[]> {
    const url = `${this.shopItemUrl}`
    return this.http.get<ShopItem[]>(url);
  }
}
