import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit{
  product: any;  // Object to hold the product details

  constructor(
    private route: ActivatedRoute,  // To get the product ID from the URL
    private productService: ProductService,  // To fetch product details from the service
    private cartService: CartService  // To manage the cart
  ) {}

  ngOnInit(): void {
    // Get the product ID from the route parameters
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      // Fetch product details by ID
      this.loadProductDetails(productId);
    }
  }

  // Method to fetch the product details from the service
  loadProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe(
      (data: any) => {
        this.product = data; // Store the fetched product details
      },
      (error) => {
        console.error('Error fetching product details', error);
      }
    );
  }

  // Method to handle adding the product to the cart
  addToCart(product: any): void {
    this.cartService.addToCart(product);  // Call the cart service to add the product
    alert(`${product.name} has been added to your cart!`);  // Optionally show an alert
  }
}
