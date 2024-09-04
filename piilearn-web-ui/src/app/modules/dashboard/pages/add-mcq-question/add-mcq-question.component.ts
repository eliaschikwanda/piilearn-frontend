import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";

@Component({
  selector: 'app-add-mcq-question',
  standalone: true,
  imports: [
    SplitterModule
  ],
  templateUrl: './add-mcq-question.component.html',
  styleUrl: './add-mcq-question.component.scss'
})
export class AddMcqQuestionComponent {

}
