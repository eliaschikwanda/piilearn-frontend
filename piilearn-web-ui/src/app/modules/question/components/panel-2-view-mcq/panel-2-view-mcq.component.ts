import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {SplitterModule} from "primeng/splitter";
import {McqQuestionResponse} from "../../../../services/models/mcq-question-response";

@Component({
  selector: 'app-panel-2-view-mcq',
  standalone: true,
  imports: [
    CardModule,
    SplitterModule
  ],
  templateUrl: './panel-2-view-mcq.component.html',
  styleUrl: './panel-2-view-mcq.component.scss'
})
export class Panel2ViewMcqComponent {
  @Input() mcqQuestionResponse!: McqQuestionResponse;
}
