import { Component, OnInit } from '@angular/core';
import {PageBreadCrumb} from '../fragments/breadcrumbs/PageBreadCrumb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  breadcrumbs: PageBreadCrumb;

  constructor() { }

  ngOnInit() {
    this.breadcrumbs = <PageBreadCrumb>{};
    this.breadcrumbs.header = "Dashboard";
    this.breadcrumbs.subHeader ="An overview of the system";
    this.breadcrumbs.iconName = "fa-dashboard";
    this.breadcrumbs.trail = ["Dashboard"];
  }

}
