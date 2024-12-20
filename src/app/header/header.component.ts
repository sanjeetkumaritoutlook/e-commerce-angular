import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from './../cart.service'; // Service for cart count
import { ProductService } from './../product.service'; // Service for search suggestions
import  {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';            // Bind to input for search query
  suggestions: string[] = [];         // Array to store search suggestions
  cartCount: number = 0;              // Holds the number of items in the cart
  constructor(
    private cartService: CartService, // Injecting cart service
    private productService: ProductService, // Injecting product service for search
    private router: Router            // For navigation
  ) {}

  ngOnInit(): void {
    // Initialize cart count from the cart service
    this.cartCount = this.cartService.getCartCount();
  }

  // Method to handle search (executed on pressing Enter)
  search(): void {
    if (this.searchQuery) {
      // Call a method to navigate to the search results page
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }

  // Method to fetch suggestions on input change
  onSearch(): void {
    if (this.searchQuery.length > 2) {
      this.productService.getSearchSuggestions(this.searchQuery).subscribe(
        (data: string[]) => {
          this.suggestions = data;
        },
        (error) => {
          console.error('Error fetching search suggestions', error);
          this.suggestions = [];
        }
      );
    } else {
      this.suggestions = [];
    }
  }
}
