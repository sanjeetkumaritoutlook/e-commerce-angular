import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];  // Array to hold the cart items  //cart: any[] = [];
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Load the cart items when the component is initialized
    this.loadCartItems();
  }

  // Method to fetch the cart items from the CartService
  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();  // Get cart items from the CartService
  }

  // Method to handle removing an item from the cart
  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);  // Call the CartService to remove the item
    this.loadCartItems();  // Reload the cart items after removal
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  checkout(): void {
    this.router.navigate(['/checkout'], { state: { cart: this.cartItems } });
  }
}
