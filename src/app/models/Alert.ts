export class AlertType {
    static DISTRESS: string = "DISTRESS";
    static FALSE_ALARM: string = "FALSE_ALARM";
    static SUSPICIOUS_ACTIVITY: string = "SUSPICIOUS_ACTIVITY";
}
export class Alert {
    id: number;
    type: string;
    userName: string;
}
