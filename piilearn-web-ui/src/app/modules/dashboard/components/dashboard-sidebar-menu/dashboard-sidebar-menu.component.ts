import { Component } from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {Button} from "primeng/button";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-sidebar-menu',
  standalone: true,
  imports: [
    SidebarModule,
    Button
  ],
  templateUrl: './dashboard-sidebar-menu.component.html',
  styleUrl: './dashboard-sidebar-menu.component.scss'
})
export class DashboardSidebarMenuComponent {
  sidebarVisible: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  goToAddMcqQuestion() {
    this.router.navigate(["dashboard/add-mcq-question"])
  }
}
