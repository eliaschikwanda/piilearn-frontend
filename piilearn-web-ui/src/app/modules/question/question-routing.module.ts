import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {QuestionListComponent} from "./pages/question-list/question-list.component";
import {authGuard} from "../../services/guard/auth.guard";
import {ViewMcqQuestionComponent} from "./pages/view-mcq-question/view-mcq-question.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    // To display everything in main component have a list of children
    children: [
      {
        path: '',
        component: QuestionListComponent,
        canActivate: [authGuard]
      },
      {
        path: ':mcq-question-code',
        component: ViewMcqQuestionComponent,
        canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
