import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-productlist',
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
  products: any[] = []; // Array to hold the list of products

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Fetch products when the component initializes
    this.loadProducts();
  }

  // Method to fetch products from the product service
  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data; // Store the fetched products
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
}
