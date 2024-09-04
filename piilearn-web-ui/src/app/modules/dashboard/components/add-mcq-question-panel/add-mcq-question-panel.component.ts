import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";
import {PanelModule} from "primeng/panel";
import {McqQuestionRequest} from "../../../../services/models/mcq-question-request";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";

@Component({
  selector: 'app-add-mcq-question-panel',
  standalone: true,
  imports: [
    DividerModule,
    PanelModule,
    FloatLabelModule,
    InputTextareaModule,
    FormsModule,
    InputNumberModule
  ],
  templateUrl: './add-mcq-question-panel.component.html',
  styleUrl: './add-mcq-question-panel.component.scss'
})
export class AddMcqQuestionPanelComponent {
  mcqQuestionRequest: McqQuestionRequest = {
    id: 0,
    mcqQuestionDescription: '',
    mcqQuestionNumOnOriginalPaper: 0,
    seasonId: 0,
    subjectId: 0,
    variantId: 0,
    yearId: 0
  }
}
