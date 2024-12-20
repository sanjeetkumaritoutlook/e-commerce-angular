import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Import necessary classes for reactive forms
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-userprofile',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit{
  userProfileForm!: FormGroup;  // FormGroup to hold the user profile data
  user: any = {};  // Variable to store the user data
  constructor(
    private fb: FormBuilder,  // FormBuilder to create the form
    private userService: UserService  // UserService to interact with the backend
  ) {}

  ngOnInit(): void {
    // Initialize the form and load user data when the component is initialized
    this.initForm();
    this.loadUserProfile();
  }

  // Initialize the form with default values and validation
  initForm(): void {
    this.userProfileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      address: ['']
    });
  }

  // Load the user's profile data from the backend
  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.user = data;  // Store the fetched data in the user variable
        this.userProfileForm.patchValue(data);  // Patch the form with the fetched user data
      },
      (error) => {
        console.error('Error loading user profile', error);  // Handle error
      }
    );
  }

  // Method to handle form submission
  updateUserProfile(): void {
    if (this.userProfileForm.valid) {
      const updatedUserData = this.userProfileForm.value;  // Get the form values
      this.userService.updateUserProfile(updatedUserData).subscribe(
        (response) => {
          console.log('User profile updated successfully', response);  // Handle success
        },
        (error) => {
          console.error('Error updating user profile', error);  // Handle error
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
