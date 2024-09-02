import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";

export const routes: Routes = [
  {
    path: "accounts/login",
    component: LoginComponent
  },
  {
    path: "accounts/register",
    component: RegisterComponent
  },
  {
    path: "accounts/activate",
    component: ActivateAccountComponent
  },
  {
    path: "questions",
    // Because questions are in a module and it's also asynchronous
    loadChildren: () => import('./modules/question/question.module')
      .then(module => module.QuestionModule)
  }
];
