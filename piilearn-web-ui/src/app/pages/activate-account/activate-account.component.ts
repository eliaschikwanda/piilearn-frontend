import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/services/authentication.service";
import {Router} from "@angular/router";
import {CodeInputModule} from "angular-code-input";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [
    CodeInputModule,
    CommonModule,
    NgIf
  ],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  message: string = "";
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['accounts/login'])
  }


  private confirmAccount(token: string) {
    this.authService.confirmEmail({
      token
    }).subscribe({
      next: () => {
        this.message = "Your account has been successfully activated. You can proceed to log in.";
        this.submitted = true;
        this.isOkay = true;
      },
      error: (error) => {
        this.message = "Token has been expired or invalid";
        this.submitted = true;
        this.isOkay = false
    }
    })
  }
}
