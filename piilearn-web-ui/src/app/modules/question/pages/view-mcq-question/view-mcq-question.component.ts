import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {Panel1ViewMcqComponent} from "../../components/panel-1-view-mcq/panel-1-view-mcq.component";
import {Panel2ViewMcqComponent} from "../../components/panel-2-view-mcq/panel-2-view-mcq.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-mcq-question',
  standalone: true,
  imports: [
    SplitterModule,
    Panel1ViewMcqComponent,
    Panel2ViewMcqComponent
  ],
  templateUrl: './view-mcq-question.component.html',
  styleUrl: './view-mcq-question.component.scss'
})
export class ViewMcqQuestionComponent {
  mcqQuestionCode: string | null= "";

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mcqQuestionCode = params.get('mcq-question-code');
      console.log(this.mcqQuestionCode);
    })
  }
}
