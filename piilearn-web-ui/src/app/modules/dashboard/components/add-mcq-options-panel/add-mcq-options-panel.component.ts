import { Component } from '@angular/core';
import {McqQuestionRequest} from "../../../../services/models/mcq-question-request";
import {DividerModule} from "primeng/divider";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-add-mcq-options-panel',
  standalone: true,
  imports: [
    DividerModule,
    PanelModule
  ],
  templateUrl: './add-mcq-options-panel.component.html',
  styleUrl: './add-mcq-options-panel.component.scss'
})
export class AddMcqOptionsPanelComponent {

}
