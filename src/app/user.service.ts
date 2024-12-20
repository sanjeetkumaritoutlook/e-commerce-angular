import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?q=1';  // Replace with actual API URL

  constructor(private http: HttpClient) {}

  // Get the user profile data
  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`);  // Adjust API endpoint as needed
  }

  // Update the user profile data
  updateUserProfile(userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profile`, userData);  // Adjust API endpoint as needed
  }
}
