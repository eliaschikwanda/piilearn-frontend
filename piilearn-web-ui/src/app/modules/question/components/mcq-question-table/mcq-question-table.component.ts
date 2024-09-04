import {Component, OnInit} from '@angular/core';
import {PageResponseMcqQuestionResponse} from "../../../../services/models/page-response-mcq-question-response";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {TruncateTextComponent} from "../truncate-text/truncate-text.component";
import {StyleClassModule} from "primeng/styleclass";
import {NgClass, NgIf} from "@angular/common";
import {MultipleChoiceQuestionsService} from "../../../../services/services/multiple-choice-questions.service";

@Component({
  selector: 'app-mcq-question-table',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    TruncateTextComponent,
    StyleClassModule,
    NgClass,
    NgIf
  ],
  templateUrl: './mcq-question-table.component.html',
  styleUrl: './mcq-question-table.component.scss'
})

export class McqQuestionTableComponent implements OnInit {
  public mcqQuestionResponse: PageResponseMcqQuestionResponse = {};
  public page: number = 0;
  public size: number = 10;

  constructor(
    private questionService: MultipleChoiceQuestionsService,
  ) {}

  ngOnInit(): void {
    this.loadMcqQuestions({ first: 0, rows: this.size });
  }

  loadMcqQuestions(event: any) {
    this.page = event.first / this.size;
    this.size = event.rows;

    console.log(event);

    // Fetch the questions
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
  }
}
