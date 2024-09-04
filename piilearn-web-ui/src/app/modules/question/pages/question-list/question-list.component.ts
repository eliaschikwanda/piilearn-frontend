import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DividerModule } from "primeng/divider";
import { MultipleChoiceQuestionsService } from "../../../../services/services/multiple-choice-questions.service";
import { Router } from "@angular/router";
import { PageResponseMcqQuestionResponse } from "../../../../services/models/page-response-mcq-question-response";
import { NgFor } from "@angular/common";
import { TokenService } from "../../../../services/token/token.service";
import {TableModule} from "primeng/table";
import {TruncateTextComponent} from "../../components/truncate-text/truncate-text.component";
import {McqQuestionTableComponent} from "../../components/mcq-question-table/mcq-question-table.component";

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [
    DividerModule,
    NgFor,
    TableModule,
    TruncateTextComponent,
    McqQuestionTableComponent
  ],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  public mcqQuestionResponse: PageResponseMcqQuestionResponse = {};
  public page: number = 0;
  public size: number = 5;
  private token: string | null = null;

  constructor(
    private questionService: MultipleChoiceQuestionsService,
    private router: Router,
    private tokenService: TokenService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.token = this.tokenService.token;
    }
    this.findAllQuestionsByUserSubjects();
  }

  private findAllQuestionsByUserSubjects() {
    if (this.token) {
      this.questionService.findAllMcqQuestionsByUserSubjects({
        page: this.page,
        size: this.size
      }).subscribe({
        next: (mcqQuestions) => {
          this.mcqQuestionResponse = mcqQuestions;
        },
        error: (err) => {
          console.error('Error fetching questions:', err);
        }
      });
    } else {
      // todo handle this case properly when token is not available when you make an initoal request
      // this.router.navigate(['accounts/login'])
      console.error('Token not available');
      // Handle case when token is not available
    }
  }
}
