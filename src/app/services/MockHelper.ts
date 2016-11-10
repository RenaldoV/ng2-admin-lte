import {AlertType, Alert} from '../models/Alert';
export class MockHelper{
    arrCount:number = 0;
    mockAlerts:Alert[];

    constructor(){
        this.mockAlerts = [];
        this.mockAlerts.push(this.getMockDistress());
        this.mockAlerts.push(this.getMockFalseAlarm());
        this.mockAlerts.push(this.getMockSuspiciousActivity());
    }

    public getNextAlert():Alert{
        this.arrCount = (++this.arrCount % 3);
        return this.mockAlerts[this.arrCount];
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