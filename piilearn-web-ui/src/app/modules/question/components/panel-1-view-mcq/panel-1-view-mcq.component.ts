import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {McqQuestionResponse} from "../../../../services/models/mcq-question-response";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {MathJaxParagraphComponent} from "../../../dashboard/components/math-jax-paragraph/math-jax-paragraph.component";
import {McqOptionFrontend} from "../../../../services/frontend-models/mcq-option-frontend";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";

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

  ngOnChanges(changes: SimpleChanges): void {
    // Also check if it's not the first change to avoid duplicate processes with ngOnIt
    if (changes['mcqQuestionResponse'] && !changes['mcqQuestionResponse'].firstChange) {
      this.transformMcqOptions();
    }
  }

  ngOnInit(): void {
    this.transformMcqOptions();
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


}
