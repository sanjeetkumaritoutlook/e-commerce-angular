import { Component ,OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, inject,AfterViewInit,ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  //   this.userForm = this.fb.group({
  //     firstName: [''],
  //     lastName: [''],
  //     dob: [''],
  //     city: [''],
  //     country: [''],
  //     nationality: ['']
  //   });

    // Detect changes in the form
    // this.userForm.valueChanges.subscribe(() => {
    //   this.unsavedChanges = true;
    // });
  }

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

  // Function to attempt navigation
  attemptNavigation() {
    if (this.unsavedChanges) {
      this.showModal = true; // Show confirmation modal
    } else {
      this.router.navigate(['/user-profile']); // Allow navigation
    }
  }

  // Handle user's choice from the modal
  confirmNavigation(discardChanges: boolean) {
    if (discardChanges) {
      this.unsavedChanges = false;
      this.router.navigate(['/user-profile']);
    }
    this.showModal = false; // Close modal
  }
}
