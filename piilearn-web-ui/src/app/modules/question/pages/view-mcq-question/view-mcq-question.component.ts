import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {Panel1ViewMcqComponent} from "../../components/panel-1-view-mcq/panel-1-view-mcq.component";

@Component({
  selector: 'app-view-mcq-question',
  standalone: true,
  imports: [
    SplitterModule,
    Panel1ViewMcqComponent
  ],
  templateUrl: './view-mcq-question.component.html',
  styleUrl: './view-mcq-question.component.scss'
})
export class ViewMcqQuestionComponent {

}
