Fetch the product details from a service, possibly using the ActivatedRoute to get the product ID from the URL.
Store the product in a class variable.
Provide a method to handle adding the product to the cart.
---
Explanation of the Code:
product Variable:

This variable will hold the product details fetched from the backend.
constructor:

ActivatedRoute is used to get the product ID from the route parameters (assuming the product details are accessed via a URL like /product/:id).
ProductService is injected to fetch the product details based on the ID.
CartService is injected to manage the cart, particularly for adding the product to the cart.
ngOnInit() Method:

This lifecycle method runs when the component is initialized. It gets the id parameter from the route using ActivatedRoute and calls loadProductDetails() to fetch the product data.
loadProductDetails() Method:

This method calls getProductById() from the ProductService to fetch the details of the product. The product details are stored in the product variable, which is then bound to the HTML template.
addToCart() Method:

This method is called when the user clicks the "Add to Cart" button. It calls the addToCart() method of the CartService to add the product to the cart and shows an alert confirming the action.
---
getProductById(id: string): This method sends a GET request to the API endpoint (e.g., https://api.example.com/products/:id) to fetch the product by its ID.
--
addToCart(product: any): This method adds the product to the cart array. You can extend it to include functionality for saving the cart in local storage, a backend, or session storage.
---
{{ product.name }}: Displays the name of the product.
[src]="product.image": Dynamically binds the src attribute of the image element to the product.image property.
{{ product.description }}: Displays the product description.
(click)="addToCart(product)": Calls the addToCart() method when the button is clicked, passing the current product.
----
Routing Configuration:
To make this work, you would need to define a route in your Angular app that passes the product ID as a parameter, like so:
This sets up a dynamic route where :id will be replaced with the actual product ID in the URL (e.g., /product/123).
----
Conclusion:
The ProductDetailComponent fetches product details based on the product ID from the URL and displays them.
The addToCart() method allows users to add the product to the cart.
The ProductService and CartService handle fetching product details and managing the cart, respectively.
The product-detail.component.html binds product properties such as name, image, and description to display them dynamically.

----
Homepage is first component to load on UI  
then it goes to ProductDetail component  based on category id selected
Conclusion:
Ensure routing is correctly configured for the category/:id route.
Make sure routerLink is correctly passing the ID in the HomepageComponent HTML.
Ensure the route is properly defined in AppRoutingModule and imported in AppModule.
Check the ActivatedRoute in ProductDetailComponent to retrieve the route parameter (id).
Verify there are no wildcard route conflicts.
Clear cache or restart the dev server if necessary.
