import { Component } from '@angular/core';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-panel-1-view-mcq',
  standalone: true,
  imports: [
    PanelModule,
    CardModule
  ],
  templateUrl: './panel-1-view-mcq.component.html',
  styleUrl: './panel-1-view-mcq.component.scss'
})
export class Panel1ViewMcqComponent {

}
