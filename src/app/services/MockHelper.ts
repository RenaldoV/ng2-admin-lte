import {AlertType, Alert} from '../models/Alert';
import {DispatchVehicle} from '../models/DispatchVehicle';


export class MockHelper {
    arrCount: number = 0;
    nextId: number = 0;
    static nextName:number = 0;
    mockAlerts: any[];
    static names:string[] = [
        "Mr S. Skow",
        "Ms L. Lesser",
        "Mr S. Sankey",
        "Ms N. Newhart",
        "Mr S. Sarvis",
        "Ms G. Gloss",
        "Mr L. Linton",
        "Ms G. Grove",
        "Mr G. Gorden",
        "Mr I. Ibanez",
        "Ms N. Nevers",
        "Mr A. Alto",
        "Ms A. Aikens",
        "Ms L. Livesay",
        "Mr R. Reach",
        "Ms F. Frasca",
        "Mr J. Jacquet",
        "Ms B. Bock",
        "Ms C. Conroy",
        "Mr J. Joyner"
    ];

    public static getNextName():string{
        this.nextName = (++this.nextName % this.names.length);
        return this.names[this.nextName];
    }

    constructor() {
        this.mockAlerts = [];
        this.mockAlerts.push(this.getNextDistress);
        this.mockAlerts.push(this.getNextFalseAlarm);
        this.mockAlerts.push(this.getNextSuspiciousActivity);
    }

    public getNextAlert(): Alert {
        this.arrCount = (++this.arrCount % this.mockAlerts.length);
        let alert: Alert = this.mockAlerts[this.arrCount]();
        alert.id = ++this.nextId;

        return alert;
    }

    public getNextDistress(): Alert {
        let mock: Alert = new Alert();
        mock.userName = MockHelper.getNextName();
        mock.type = AlertType.DISTRESS;
        mock.id = ++this.nextId;
        return mock;
    }

    public getNextFalseAlarm(): Alert {
        let mock: Alert = new Alert();
        mock.userName = MockHelper.getNextName();
        mock.type = AlertType.FALSE_ALARM;
        mock.id = ++this.nextId;
        return mock;
    }

    public getNextSuspiciousActivity(): Alert {
        let mock: Alert = new Alert();
        mock.userName = MockHelper.getNextName();
        mock.type = AlertType.SUSPICIOUS_ACTIVITY;
        mock.id = ++this.nextId;
        return mock;
    }


    public makeFalseAlarm(alerts: Alert[]): Alert {
        for (let i: number = 0; i < alerts.length; i++) {
            if (alerts[i].type === AlertType.DISTRESS) {
                alerts[i].type = AlertType.FALSE_ALARM;
                return alerts[i];
            }
        }
        return null;
    }

    public getMockDispatchVehicles(): DispatchVehicle[] {
        let ptaCar: DispatchVehicle = <DispatchVehicle>{};
        ptaCar.latitude = -25.733113;
        ptaCar.longitude = 28.298407999999995;
        ptaCar.label = 'P';

        let clnCar: DispatchVehicle = <DispatchVehicle>{};
        clnCar.latitude = -25.6749203;
        clnCar.longitude = 28.4658821;
        clnCar.label = 'P';

        let rtnCar: DispatchVehicle = <DispatchVehicle>{};
        rtnCar.latitude = -25.7027853;
        rtnCar.longitude = 28.2117256;
        rtnCar.label = 'P';

        return [ptaCar, clnCar, rtnCar];
    }

}