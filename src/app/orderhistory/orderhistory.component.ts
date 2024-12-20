import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-orderhistory',
  imports: [CommonModule],
  templateUrl: './orderhistory.component.html',
  styleUrl: './orderhistory.component.css'
})
export class OrderhistoryComponent implements OnInit {
  orders: any[] = [];  // Array to hold the orders

  constructor(private orderService: OrderService) {}  // Inject the OrderService

  ngOnInit(): void {
    // Load order history when the component is initialized
    this.loadOrderHistory();
  }

  // Method to fetch order history from the backend
  loadOrderHistory(): void {
    this.orderService.getOrderHistory().subscribe(
      (data) => {
        this.orders = data;  // Store the fetched orders in the orders array
      },
      (error) => {
        console.error('Error loading order history', error);  // Handle any errors
      }
    );
  }
}
