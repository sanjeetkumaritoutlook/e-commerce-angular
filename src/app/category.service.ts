import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { environment } from './../../src/environments/environment'; // Import your environment settings

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Replace with actual API URL

  constructor(private http: HttpClient) {}

  // Method to fetch categories
  // getCategories(): Observable<{ id: number, name: string }[]> {
  //   return this.http.get<{ id: number, name: string }[]>(this.apiUrl);
  // }
  getCategories(): Observable<any[]> {
    if (environment.mockApi) {
      // Mock response data if mockApi is true in environment
      return of([
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Clothing' },
        { id: 3, name: 'Home Appliances' }
      ]);
   }
    // Make HTTP call if mockApi is false
    return this.http.get<any[]>(this.apiUrl);
  }
}
