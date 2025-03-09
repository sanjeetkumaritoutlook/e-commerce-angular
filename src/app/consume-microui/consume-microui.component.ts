import { Component ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-consume-microui',
  imports: [],
  templateUrl: './consume-microui.component.html',
  styleUrl: './consume-microui.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 Add here
})
export class ConsumeMicrouiComponent {
  userData = { name: '' };
  orderData = { item: '' };

  handleFormSubmit(event: any) {
    console.log('Form One Submitted:', event);
  }

  
}
