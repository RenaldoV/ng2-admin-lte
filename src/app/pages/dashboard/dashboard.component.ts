import { Component, OnInit } from '@angular/core';
import {PageBreadCrumb} from '../fragments/breadcrumbs/PageBreadCrumb';
import {Alert, AlertType} from '../../models/Alert';
import {AlertButton} from '../../models/AlertButton';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  breadcrumbs: PageBreadCrumb;
  alerts:Alert[];

  constructor() { }

  ngOnInit() {
    this.breadcrumbs = <PageBreadCrumb>{};
    this.breadcrumbs.header = "Dashboard";
    this.breadcrumbs.subHeader ="An overview of the system";
    this.breadcrumbs.iconName = "fa-dashboard";


    this.breadcrumbs.trail = ["Dashboard"];
    this.alerts = [];
    this.alerts.push(this.getMockFalseAlarm());
    this.alerts.push(this.getMockSuspiciousActivity());
    this.alerts.push(this.getMockDistress());
  }

  private getMockDistress():Alert{
    let mock:Alert = new Alert();
    mock.userName = "B. Belcher";
    mock.type = AlertType.DISTRESS;
    return mock;
  }

  private getMockFalseAlarm():Alert{
    let mock:Alert = new Alert();
    mock.userName = "B. Lesner";
    mock.type = AlertType.FALSE_ALARM;
    return mock;
  }

  private getMockSuspiciousActivity():Alert{
    let mock:Alert = new Alert();
    mock.userName = "B. Me";
    mock.type = AlertType.SUSPICIOUS_ACTIVITY;
    return mock;
  }

}
