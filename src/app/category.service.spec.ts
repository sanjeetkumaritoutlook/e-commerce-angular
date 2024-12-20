import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// describe('CategoryService', () => {
//   let service: CategoryService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CategoryService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
describe('CategoryService', () => {
  let categoryService: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService]
    });

    categoryService = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch categories', () => {
    const mockCategories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' }
    ];

    categoryService.getCategories().subscribe((categories) => {
      expect(categories.length).toBe(2);
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne('https://api.example.com/categories');
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories); // Mock the response

    httpMock.verify(); // Ensure there are no outstanding requests
  });
});