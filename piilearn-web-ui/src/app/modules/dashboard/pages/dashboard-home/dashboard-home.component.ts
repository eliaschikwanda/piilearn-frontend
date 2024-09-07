import { Component } from '@angular/core';
import {DashboardSidebarMenuComponent} from "../../components/dashboard-sidebar-menu/dashboard-sidebar-menu.component";

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    DashboardSidebarMenuComponent
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent {

}
