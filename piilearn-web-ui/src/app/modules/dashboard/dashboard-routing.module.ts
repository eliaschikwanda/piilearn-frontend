import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "../question/pages/main/main.component";
import {authGuard} from "../../services/guard/auth.guard";
import {DashboardHomeComponent} from "./pages/dashboard-home/dashboard-home.component";
import {AddMcqQuestionComponent} from "./pages/add-mcq-question/add-mcq-question.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: DashboardHomeComponent,
        canActivate: [authGuard]
      },
      {
        path: 'add-mcq-question',
        component: AddMcqQuestionComponent,
        canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
