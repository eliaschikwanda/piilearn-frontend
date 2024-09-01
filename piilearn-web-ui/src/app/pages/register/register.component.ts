import { Component } from '@angular/core';
import {RegistrationRequest} from "../../services/models/registration-request";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private authService : AuthenticationService,
    private router: Router
  ) {
  }

  regRequest: RegistrationRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  errorMsg: Array<string> = [];

  signUp() {
    this.errorMsg = [];
    this.authService.registerUser({
      body: this.regRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['accounts/activate'])
      },
      error: (error) => {
        if (error.error.validationErrors) {
          this.errorMsg = error.error.validationErrors;
        } else {
          this.errorMsg.push(error.error.error);
        }
      }
    })
  }

  forgotPassword() {

  }

  singIn() {
    this.router.navigate(["accounts/login"])
  }
}
