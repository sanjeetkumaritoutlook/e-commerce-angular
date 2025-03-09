import { Component , ViewChild, CUSTOM_ELEMENTS_SCHEMA, inject,AfterViewInit,ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-consume-microui',
  imports: [CommonModule],
  templateUrl: './consume-microui.component.html',
  styleUrl: './consume-microui.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // 👈 Add here

})
export class ConsumeMicrouiComponent implements AfterViewInit  {
  @ViewChild('opportunityForm', { static: false }) opportunityForm!: ElementRef;
  userData = {
    firstName: '',
    lastName: '',
    dob: '',
    city: '',
    country: '',
    nationality: ''
  };
  //userForm!: FormGroup;
  unsavedChanges: boolean = false;
  showModal: boolean = false; // Controls the confirmation modal
  router = inject(Router);
  
  ngAfterViewInit() {
    // Detect changes inside the Web Component's Form
    setTimeout(() => {
      const formElement = this.opportunityForm?.nativeElement;
      if (formElement) {
        formElement.addEventListener('input', () => {
          this.unsavedChanges = true;
        });
      }
    }, 1000);
  }
  handleFormSubmit(event: any) {
    console.log('Form Submitted:', event);
    this.unsavedChanges = false; // Reset unsaved changes flag
  }


  async canDeactivate(): Promise<boolean> {
    if (this.unsavedChanges) {
      const confirmation = await this.showUnsavedChangesModal();
      return confirmation;
    }
    return true;
  }

  showUnsavedChangesModal(): Promise<boolean> {
    return new Promise((resolve) => {
      const modal = document.getElementById('unsavedChangesModal') as HTMLDialogElement;
      if (modal) {
        modal.showModal();

        document.getElementById('confirmExit')?.addEventListener('click', () => {
          modal.close();
          resolve(true);
        });

        document.getElementById('cancelExit')?.addEventListener('click', () => {
          modal.close();
          resolve(false);
        });
      } else {
        resolve(true);
      }
    });
  }
}
