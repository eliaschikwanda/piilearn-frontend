import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {Panel1ViewMcqComponent} from "../../components/panel-1-view-mcq/panel-1-view-mcq.component";
import {Panel2ViewMcqComponent} from "../../components/panel-2-view-mcq/panel-2-view-mcq.component";
import {ActivatedRoute} from "@angular/router";
import {MultipleChoiceQuestionsService} from "../../../../services/services/multiple-choice-questions.service";
import {ERROR_MESSAGES} from "../../../../../error-message";
import {McqQuestionResponse} from "../../../../services/models/mcq-question-response";
import {NgForOf, NgIf} from "@angular/common";
import {TabViewModule} from "primeng/tabview";
import {ScrollPanelModule} from "primeng/scrollpanel";

@Component({
  selector: 'app-view-mcq-question',
  standalone: true,
  imports: [
    SplitterModule,
    Panel1ViewMcqComponent,
    Panel2ViewMcqComponent,
    NgForOf,
    NgIf,
    TabViewModule,
    ScrollPanelModule
  ],
  templateUrl: './view-mcq-question.component.html',
  styleUrl: './view-mcq-question.component.scss'
})
export class ViewMcqQuestionComponent {
  errorMsg: string[] = [];
  mcqQuestionCode: string = "";
  mcqQuestionResponse!: McqQuestionResponse;

  constructor(
    private route: ActivatedRoute,
    private mcqQuestionService: MultipleChoiceQuestionsService,
  ) {
  }

  ngOnInit() {
    this.getPassedParameters();
    this.getMcqQuestionByCode();
  }

  private getPassedParameters() {
    this.route.paramMap.subscribe(params => {
      this.mcqQuestionCode = params.get('mcq-question-code') ?? "";
    })
  }

  private getMcqQuestionByCode() {
    this.mcqQuestionService.getMcqQuestionByMcqQuestionCode({
      "mcq-question-code": this.mcqQuestionCode
    }).subscribe({
      next: (res) => {
        this.mcqQuestionResponse = res;
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
