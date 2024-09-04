import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { NgFor } from "@angular/common";
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
export class QuestionListComponent {

}
