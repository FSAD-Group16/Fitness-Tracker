import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for API calls
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm: FormGroup;
  apiUrl = 'http://localhost:5000';  
  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient, // Inject HttpClient service
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onRegister(): void {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value; // Destructure form values

      // Prepare API request data
      const registerData = {
        name: username, // Assuming backend expects "name" instead of "username"
        email,
        password
      };

      // Send POST request to backend signup API endpoint
      this.http.post(this.apiUrl + '/sign-up', registerData)
        .subscribe(
          response => {
            console.log('Registration successful!', response);
            this.router.navigateByUrl(''); // Redirect to home or login page after successful signup
          },
          error => {
            console.error('Registration failed:', error);
            // Handle registration errors (display error message to user)
          }
        );
    } else {
      return; // Prevent action if form is invalid
    }
  }
}
