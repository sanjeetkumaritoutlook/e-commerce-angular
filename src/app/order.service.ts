import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Replace with actual API URL

  constructor(private http: HttpClient) {}

  // Method to place the order
  placeOrder(orderData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orderData);  // Send the order data to the backend
  }
   // Method to fetch order history -used in another component
   getOrderHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history`);  // Endpoint to fetch the order history
  }
}
