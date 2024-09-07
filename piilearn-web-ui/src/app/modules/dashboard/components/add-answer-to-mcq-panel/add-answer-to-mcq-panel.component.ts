import { Component } from '@angular/core';
import {PanelModule} from "primeng/panel";
import {NgForOf, NgIf} from "@angular/common";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {McqAddAnswerRequest} from "../../../../services/models/mcq-add-answer-request";
import {MultipleChoiceQuestionsService} from "../../../../services/services/multiple-choice-questions.service";
import {ERROR_MESSAGES} from "../../../../../error-message";
import {Subscription} from "rxjs";
import {QuestionIdSaveService} from "../../../../services/shared/questIdSave/questionIdSave.service";

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

  private questionIdSubscription!: Subscription;

  constructor(
    private mcqQuestionService: MultipleChoiceQuestionsService,
    private questionIdSaveService: QuestionIdSaveService
  ) {
  }

  // Already populate the question id.
  ngOnInit(): void {
    this.questionIdSubscription = this.questionIdSaveService.questionId$.subscribe(id => {
      this.mcqAddAnswerRequest.questionId = id;
    });
  }

  ngDestroy(): void {
    if (this.questionIdSubscription) {
      this.questionIdSubscription.unsubscribe();
    }
  }

  saveMcqAnswer() {
    this.errorMsg = [];
    this.mcqQuestionService.addMcqAnswer({
      body: this.mcqAddAnswerRequest
    }).subscribe({
      next: (res) => {
        this.mcqAddAnswerRequest.questionId = 0;
        this.mcqAddAnswerRequest.mcqOptionId = 0;
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
