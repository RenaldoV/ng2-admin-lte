import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AlertType, Alert} from '../../models/Alert';


@Component({
  selector: 'system-alert',
  templateUrl: 'system-alert.component.html',
  styleUrls: ['system-alert.component.css']
})
export class SystemAlertComponent implements OnInit {
  @Input()
  public alert:Alert;
  @Output()
  dismissAlert = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public isDistress():boolean{
    return this.alert.type == AlertType.DISTRESS;
  }

  public isSuspiciousActivity():boolean{
    return this.alert.type == AlertType.SUSPICIOUS_ACTIVITY;
  }

  dismiss(alertId:number){
    this.dismissAlert.emit(alertId);
  }

}
