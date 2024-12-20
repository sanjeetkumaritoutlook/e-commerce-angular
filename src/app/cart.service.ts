import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];  // This can be populated with actual cart data.
  private cart: any[] = [];  // Array to store cart items
  constructor() { }

  // Method to get the number of items in the cart
  getCartCount(): number {
    return this.cartItems.length;
  }

 

  // Optionally add/remove items to the cart
  // Method to add a product/item to the cart
  addToCart(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;  // If the item already exists, increase its quantity
    } else {
      this.cart.push(item);  // Otherwise, add the new item to the cart
    }
  }

  // Optionally, you could add more methods like getCartItems() to retrieve the cart
 // Method to get the current cart items
 getCartItems(): any[] {
  return this.cart;  // Return the current cart items
}
  // Method to remove an item from the cart
  removeFromCart(item: any): void {
    const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);  // Remove the item from the cart array
    }
  }
}
