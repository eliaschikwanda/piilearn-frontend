import {Component, Input} from '@angular/core';
import {PageResponseMcqQuestionResponse} from "../../../../services/models/page-response-mcq-question-response";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {TruncateTextComponent} from "../truncate-text/truncate-text.component";
import {StyleClassModule} from "primeng/styleclass";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-mcq-question-table',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    TruncateTextComponent,
    StyleClassModule,
    NgClass
  ],
  templateUrl: './mcq-question-table.component.html',
  styleUrl: './mcq-question-table.component.scss'
})
export class McqQuestionTableComponent {
  @Input() public mcqQuestionResponse: PageResponseMcqQuestionResponse = {};

}
