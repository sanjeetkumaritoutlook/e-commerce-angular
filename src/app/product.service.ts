import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Replace with actual API URL
  constructor(private http: HttpClient) { }

  // Fetch search suggestions based on the query
  getSearchSuggestions(query: string): Observable<string[]> {
    return this.http.get<string[]>(`https://jsonplaceholder.typicode.com/posts?q=${query}`);
  }
  // Method to fetch products from the API - used in productList component
  getProducts(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
  // Method to fetch a product by its ID- used in another component
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  } 
}
