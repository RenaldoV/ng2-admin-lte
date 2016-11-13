import {Component, OnInit, HostListener, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {PageBreadCrumb} from '../fragments/breadcrumbs/PageBreadCrumb';
import {Alert} from '../../models/Alert';
import {MockHelper} from '../../services/MockHelper';
import {MapsAPILoader} from 'angular2-google-maps/core';
import {FormControl} from '@angular/forms';
import {DispatchVehicle} from '../../models/DispatchVehicle';
import {ModalComponent} from 'ng2-bs3-modal/components/modal';
declare var google: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @ViewChild("search")
    public searchElementRef: ElementRef;
    @ViewChild('myModal')
    modal: ModalComponent;
    public searchControl: FormControl;

    breadcrumbs: PageBreadCrumb;
    alerts: Alert[];
    dispatchVehicles: DispatchVehicle[];
    lat: number = -25.733113;
    lng: number = 28.298407999999995;
    selectedUser:string = "";

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
                let fa: Alert = this.mockHelper.makeFalseAlarm(this.alerts);
                break;
            case keyCodes.s:
                this.alerts.push(this.mockHelper.getNextSuspiciousActivity());
                break;

        }
        console.log($event);
    }

    constructor(private mapsAPILoader: MapsAPILoader) {
    }

    ngOnInit() {
        this.breadcrumbs = <PageBreadCrumb>{};
        this.breadcrumbs.header = "Dashboard";
        this.breadcrumbs.subHeader = "An overview of the system";
        this.breadcrumbs.iconName = "fa-dashboard";
        this.breadcrumbs.trail = ["Dashboard"];

        this.alerts = [];
        this.mockHelper = new MockHelper();
        this.dispatchVehicles = this.mockHelper.getMockDispatchVehicles(this.alerts);

        this.searchControl = new FormControl();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                //get the place result
                let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                //set latitude and longitude
                this.lat = place.geometry.location.lat();
                this.lng = place.geometry.location.lng();
            });
        });
    }

    dismissAlert(alertId) {
        this.alerts = this.alerts.filter(alert => {
            return alert.id !== alertId
        });
    }

    showSender() {
        if(this.alerts.length > 0){
            this.modal.open();
        }
    }

}

export enum keyCodes{
    h = 72,
    f = 70,
    s = 83
}
