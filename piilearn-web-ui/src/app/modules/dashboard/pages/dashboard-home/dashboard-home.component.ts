import { Component } from '@angular/core';
import {DashboardSidebarMenuComponent} from "../../components/dashboard-sidebar-menu/dashboard-sidebar-menu.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
    imports: [
        DashboardSidebarMenuComponent,
        RouterOutlet
    ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent {

}
