import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {McqQuestionResponse} from "../../../../services/models/mcq-question-response";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {MathJaxParagraphComponent} from "../../../dashboard/components/math-jax-paragraph/math-jax-paragraph.component";
import {McqOptionFrontend} from "../../../../services/frontend-models/mcq-option-frontend";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {
  MultipleChoiceQuestionsAnswersService
} from "../../../../services/services/multiple-choice-questions-answers.service";
import {McqAnswerResponseWithId} from "../../../../services/models/mcq-answer-response-with-id";
import {ERROR_MESSAGES} from "../../../../../error-message";

@Component({
  selector: 'app-panel-1-view-mcq',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    NgIf,
    MathJaxParagraphComponent,
    KeyValuePipe,
    NgForOf,
    RadioButtonModule,
    FormsModule
  ],
  templateUrl: './panel-1-view-mcq.component.html',
  styleUrl: './panel-1-view-mcq.component.scss'
})
export class Panel1ViewMcqComponent implements OnInit, OnChanges{
  @Input() mcqQuestionResponse!: McqQuestionResponse;
  transformedMcqOptions: McqOptionFrontend = {};
  selectedOption: number = 0;
  responseMessageNeg: string = "";
  isWrongAnswer: boolean = false;
  curOptionAnswer: string = "";
  isCorrectAnswer: boolean = false;
  private mcqAnswerResponseWithId!: McqAnswerResponseWithId;
  errorMsg: string[] = [];

  constructor(
    private mcqAnswerService: MultipleChoiceQuestionsAnswersService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Also check if it's not the first change to avoid duplicate processes with ngOnIt
    if (changes['mcqQuestionResponse'] && !changes['mcqQuestionResponse'].firstChange) {
      this.transformMcqOptions();
    }
    // Also get answer on update
    if (this.mcqQuestionResponse) {
      this.getMcqAnswerId();
    }
  }

  ngOnInit(): void {
    this.transformMcqOptions();
    // Get answer if data is available
    if (this.mcqQuestionResponse) {
      this.getMcqAnswerId();
    }
  }

  evaluateSelectedOption() {
    // Reset all variables
    this.responseMessageNeg = "";
    this.isWrongAnswer = false;
    this.isCorrectAnswer = false;

    if (this.selectedOption == 0) {
      this.responseMessageNeg = "Select at least one option."
    } else {
      if (this.mcqAnswerResponseWithId) {
        this.curOptionAnswer = this.transformedMcqOptions[this.selectedOption].mcqOptionRep;
        if (this.mcqAnswerResponseWithId.mcqOptionIdCorrectAnswer == this.selectedOption) {
          this.isCorrectAnswer = true;
        } else {
          this.isWrongAnswer = true;
        }
      } else {
        console.log("Data not available yet.")
      }
    }
  }

  transformMcqOptions() {
    if (!this.mcqQuestionResponse || !this.mcqQuestionResponse.mcqOptions) {
      return;
    }
    const mcqOptions = this.mcqQuestionResponse.mcqOptions;
    const transformed: McqOptionFrontend = {};

    for (const [id, option] of Object.entries(mcqOptions)) {
      const [[mcqOptionRep, mcqOptionDes]] = Object.entries(option);
      transformed[parseInt(id)] = {mcqOptionRep, mcqOptionDes};
    }
    this.transformedMcqOptions = transformed;
  }

  private getMcqAnswerId() {
    this.mcqAnswerService.getAnswerIdToQuestion({
      "mcq-question-id" : this.mcqQuestionResponse.id || 0
    }).subscribe({
      next: (res) => {
        this.mcqAnswerResponseWithId = res;
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
