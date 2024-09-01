import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgFor
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  authRequest: AuthenticationRequest = {usernameOrEmailAddress: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokeService: TokenService
    // another service
  ) {
  }

  signIn() {
    // First reset the error messages so that user can get a clean page
    this.errorMsg = []
    this.authService.authenticateUser({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokeService.token = res.token as string;
        this.router.navigate(['questions']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          // Just push the default returned by angular
          this.errorMsg.push(err.error.error)
        }
      }
    })
  }

  forgotPassword() {

  }

  singUp() {
    this.router.navigate(['accounts/register'])
  }
}
