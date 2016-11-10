import {AlertType, Alert} from '../models/Alert';
export class MockHelper{
    arrCount:number = 0;
    nextId:number = 0;
    mockAlerts:any[];

    constructor(){
        this.mockAlerts = [];
        this.mockAlerts.push(this.getMockDistress);
        this.mockAlerts.push(this.getMockFalseAlarm);
        this.mockAlerts.push(this.getMockSuspiciousActivity);
    }

    public getNextAlert():Alert{
        this.arrCount = (++this.arrCount % this.mockAlerts.length);
        let alert:Alert = this.mockAlerts[this.arrCount]();
        alert.id = ++this.nextId;

        return alert;
    }

    public getNextDistress():Alert{
        let alert:Alert = this.getMockDistress();
        alert.id = ++this.nextId;
        return alert;
    }

    public getNextFalseAlarm():Alert{
        let alert:Alert = this.getMockFalseAlarm();
        alert.id = ++this.nextId;
        return alert;
    }

    public getNextSuspiciousActivity():Alert{
        let alert:Alert = this.getMockSuspiciousActivity();
        alert.id = ++this.nextId;
        return alert;
    }

    private getMockDistress():Alert{
        let mock:Alert = new Alert();
        mock.userName = "Mr B. Geyser";
        mock.type = AlertType.DISTRESS;
        return mock;
    }

    private getMockFalseAlarm():Alert{
        let mock:Alert = new Alert();
        mock.userName = "Ms K. Smidt";
        mock.type = AlertType.FALSE_ALARM;
        return mock;
    }

    private getMockSuspiciousActivity():Alert{
        let mock:Alert = new Alert();
        mock.userName = "Dr R. Kent";
        mock.type = AlertType.SUSPICIOUS_ACTIVITY;
        return mock;
    }

    makeFalseAlarm(alerts: Alert[]):Alert {
        for(let i:number = 0; i < alerts.length; i++){
            if(alerts[i].type === AlertType.DISTRESS){
                alerts[i].type = AlertType.FALSE_ALARM;
                return alerts[i];
            }
        }
        return null;
    }
}