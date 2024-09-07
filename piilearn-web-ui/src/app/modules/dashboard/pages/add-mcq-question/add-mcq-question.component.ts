import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {AddMcqQuestionPanelComponent} from "../../components/add-mcq-question-panel/add-mcq-question-panel.component";
import {AddMcqOptionsPanelComponent} from "../../components/add-mcq-options-panel/add-mcq-options-panel.component";
import {AddAnswerToMcqPanelComponent} from "../../components/add-answer-to-mcq-panel/add-answer-to-mcq-panel.component";
import {DashboardSidebarMenuComponent} from "../../components/dashboard-sidebar-menu/dashboard-sidebar-menu.component";

@Component({
  selector: 'app-add-mcq-question',
  standalone: true,
    imports: [
        SplitterModule,
        AddMcqQuestionPanelComponent,
        AddMcqOptionsPanelComponent,
        AddAnswerToMcqPanelComponent,
        DashboardSidebarMenuComponent
    ],
  templateUrl: './add-mcq-question.component.html',
  styleUrl: './add-mcq-question.component.scss'
})
export class AddMcqQuestionComponent {

}
