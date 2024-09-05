import { Component } from '@angular/core';
import {PanelModule} from "primeng/panel";
import {NgForOf, NgIf} from "@angular/common";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {McqAddAnswerRequest} from "../../../../services/models/mcq-add-answer-request";
import {MultipleChoiceQuestionsService} from "../../../../services/services/multiple-choice-questions.service";
import {ERROR_MESSAGES} from "../../../../../error-message";

@Component({
  selector: 'app-add-answer-to-mcq-panel',
  standalone: true,
  imports: [
    PanelModule,
    NgForOf,
    NgIf,
    FloatLabelModule,
    InputNumberModule,
    FormsModule
  ],
  templateUrl: './add-answer-to-mcq-panel.component.html',
  styleUrl: './add-answer-to-mcq-panel.component.scss'
})
export class AddAnswerToMcqPanelComponent {
  errorMsg: string[] = [];
  mcqAddAnswerRequest: McqAddAnswerRequest = {
    questionId: 0,
    mcqOptionId: 0
  };

  constructor(
    private mcqQuestionService: MultipleChoiceQuestionsService
  ) {
  }

  saveMcqAnswer() {
    this.errorMsg = [];
    this.mcqQuestionService.addMcqAnswer({
      body: this.mcqAddAnswerRequest
    }).subscribe({
      next: (res) => {
        // todo add something friendly
      },
      error: (err) => {
        if (err.error.validationErrors) {
          err.error.validationErrors.forEach((msg: string ) => {
            this.errorMsg.push(ERROR_MESSAGES[msg] || msg);
          });
        } else {
          this.errorMsg.push(err.error.error);
        }
      }
    })
  }
}
