import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";
import {authGuard} from "./services/guard/auth.guard";

export const routes: Routes = [
  // These routes are open we don't need a user (token) to access these urls
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
  // The urls below need a user and can use an auth guard
  {
    path: "questions",
    // Because questions are in a module and it's also asynchronous
    loadChildren: () => import('./modules/question/question.module')
      .then(module => module.QuestionModule),
    canActivate: [authGuard]
  },
  {
    path: "dashboard",
    loadChildren: () => import('./modules/dashboard/dashboard.module')
      .then(module => module.DashboardModule),
    canActivate: [authGuard]
  }
];
