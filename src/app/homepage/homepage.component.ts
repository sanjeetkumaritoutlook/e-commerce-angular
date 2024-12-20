import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from './../category.service';  // Service to fetch categories
import { Observer } from 'rxjs';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  //HomepageComponent itself is CategoryComponent,same html
  categories: { id: number, name: string }[] = []; // Array to hold category data

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // Fetch categories on component initialization
    this.loadCategories();
  }

  // Method to fetch categories from the category service
  loadCategories(): void {
    // this.categoryService.getCategories().subscribe(
    //   (data: { id: number, name: string }[]) => {
    //     this.categories = data; // Store fetched categories in the categories array
    //   },
    //   (error) => {
    //     console.error('Error fetching categories', error);
    //   }
    // );
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error occurred:', error);
      },
      complete: () => {
        console.log('Completed fetching categories');
      }
    });
  }
}
