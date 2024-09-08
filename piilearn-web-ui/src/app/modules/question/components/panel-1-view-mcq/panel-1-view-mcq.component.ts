import {Component, Input} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {McqQuestionResponse} from "../../../../services/models/mcq-question-response";
import {NgIf} from "@angular/common";
import {MathJaxParagraphComponent} from "../../../dashboard/components/math-jax-paragraph/math-jax-paragraph.component";

@Component({
  selector: 'app-panel-1-view-mcq',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    NgIf,
    MathJaxParagraphComponent
  ],
  templateUrl: './panel-1-view-mcq.component.html',
  styleUrl: './panel-1-view-mcq.component.scss'
})
export class Panel1ViewMcqComponent {
  @Input() mcqQuestionResponse!: McqQuestionResponse;

}
