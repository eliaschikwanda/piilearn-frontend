import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";
import {PanelModule} from "primeng/panel";
import {NgForOf, NgIf} from "@angular/common";
import {McqOptionRequest} from "../../../../services/models/mcq-option-request";
import {MultipleChoiceOptionsService} from "../../../../services/services/multiple-choice-options.service";
import {FloatLabelModule} from "primeng/floatlabel";
import {PaginatorModule} from "primeng/paginator";
import { InputTextareaModule } from 'primeng/inputtextarea';
import {InputTextModule} from "primeng/inputtext";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {MathJaxParagraphComponent} from "../math-jax-paragraph/math-jax-paragraph.component";

@Component({
  selector: 'app-add-mcq-options-panel',
  standalone: true,
  imports: [
    DividerModule,
    PanelModule,
    NgForOf,
    NgIf,
    FloatLabelModule,
    PaginatorModule,
    InputTextareaModule,
    InputTextModule,
    Button,
    CardModule,
    MathJaxParagraphComponent,
  ],
  templateUrl: './add-mcq-options-panel.component.html',
  styleUrl: './add-mcq-options-panel.component.scss'
})
export class AddMcqOptionsPanelComponent {
  errorMsg: string[] = [];
  optionDescription: string = "CH\\(_{3}\\,^{+}\\)";
  mcqOptionRequest: McqOptionRequest = {
    id: 0,
    optionRep: "",
    optionDescription: "",
    mcqQuestionId: 0
  }

  constructor(
    private mcqOptionService: MultipleChoiceOptionsService
  ) {
  }

  saveOption() {
    console.log(this.mcqOptionRequest)
  }

  onQuestionOptionChange(optionDescription: string) {
    this.optionDescription = optionDescription;
  }
}
