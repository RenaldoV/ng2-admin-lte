import {Component, OnInit, HostListener} from '@angular/core';
import {PageBreadCrumb} from '../fragments/breadcrumbs/PageBreadCrumb';
import {Alert} from '../../models/Alert';
import {MockHelper} from '../../services/MockHelper';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    breadcrumbs: PageBreadCrumb;
    alerts: Alert[];

    mockHelper: MockHelper;
    shouldReact: number = 0;

    @HostListener('window:keydown', ['$event'])
    handleHotKey($event: KeyboardEvent) {
        //the key event fires twice - ignore first fire as workaround
        this.shouldReact = (++this.shouldReact % 2);
        if (this.shouldReact === 0) return;

        switch ($event.keyCode) {
            case keyCodes.h:
                this.alerts.push(this.mockHelper.getNextAlert());
                break;
            case keyCodes.f:
                let fa:Alert = this.mockHelper.makeFalseAlarm(this.alerts);
                break;
        }
    }

    constructor() {
    }

    ngOnInit() {
        this.breadcrumbs = <PageBreadCrumb>{};
        this.breadcrumbs.header = "Dashboard";
        this.breadcrumbs.subHeader = "An overview of the system";
        this.breadcrumbs.iconName = "fa-dashboard";
        this.breadcrumbs.trail = ["Dashboard"];

        this.alerts = [];
        this.mockHelper = new MockHelper();
    }

    dismissAlert(alertId){
        this.alerts = this.alerts.filter(alert =>{return alert.id  !== alertId});
    }

}

export enum keyCodes{
    h = 72,
    f = 70
}
