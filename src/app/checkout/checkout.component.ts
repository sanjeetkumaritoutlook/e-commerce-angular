import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private orderService: OrderService  // Inject the OrderService to handle placing the order
  ) {
    // Initialize the form with controls and validators
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],  // Name field with validation
      address: ['', [Validators.required, Validators.minLength(5)]],  // Address field with validation
    });

  }
  ngOnInit(): void {
      }
// Method to handle form submission
  placeOrder() {
    if (this.checkoutForm.valid) {
      const orderData = this.checkoutForm.value;  // Get form values
      this.orderService.placeOrder(orderData).subscribe(
        (response) => {
          console.log('Order placed successfully', response);  // Handle success
          // Optionally, you can reset the form or navigate to another page
        },
        (error) => {
          console.error('Error placing order', error);  // Handle error
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
