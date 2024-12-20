import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';

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
  // getProductById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // } 
  getProductById(id: string): Observable<any> {
    const mockProducts = [
    {  
      id:'1',
      name: 'Mock Product 1',
      image: 'https://picsum.photos/200/300?random=1',
      description: 'This is a mock product description.'
    },
    {
      id:'2',
      name: 'Mock Product 2',
      image: 'https://picsum.photos/200/300?random=2',
      description: 'This is a mock product description.'
    },
    {
      id:'3',
      name: 'Mock Product 3',
      image: 'https://picsum.photos/200/300?random=',
      description: 'This is a mock product description.'
    }
  ];
  const product = mockProducts.find(product => product.id === id); // Find the product
  return of(product); // Return as an Observable
}
}
