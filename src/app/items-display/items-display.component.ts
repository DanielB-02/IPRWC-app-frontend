import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-items-display',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './items-display.component.html',
  styleUrl: './items-display.component.scss'
})
export class ItemsDisplayComponent {
  items = [
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    {
      name: 'Item 1',
      description: 'Description for item 1',
      price: 19.99,
      imageUrl: 'path/to/image1.jpg'
    },
    // Repeat the above block for items 2 to 9
  ];

  addToCart(item: any): void {
    // Implement your add to cart logic here
    console.log('Added to cart:', item);
  }
}
