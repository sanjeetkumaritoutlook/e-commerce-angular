import { Component,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@Component({
  selector: 'app-consume-external',
  imports: [],
  templateUrl: './consume-external.component.html',
  styleUrl: './consume-external.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 Add here
})
export class ConsumeExternalComponent {
  userData = { name: '' };
  orderData = { item: '' };

  handleFormSubmit(event: any) {
    console.log('Form One Submitted:', event);
  }

  handleOrderSubmit(event: any) {
    console.log('Form Two Submitted:', event);
  }
}
