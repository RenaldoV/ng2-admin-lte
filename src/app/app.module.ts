//external module
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AlertModule, DatepickerModule} from 'ng2-bootstrap/ng2-bootstrap';
import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import {ToasterModule} from 'angular2-toaster/angular2-toaster';

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: ''
};

let modules = [
    AlertModule,
    DatepickerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ToasterModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDivAqW0-gaH8aEAt56DPTsv5BJu9rZL60',
        libraries: ["places"]
    })
];

import {AppHeaderComponent} from "./widgets/app-header";
import {MenuAsideComponent} from "./widgets/menu-aside";
import {MessagesBoxComponent} from "./widgets/messages-box";
import {NotificationBoxComponent} from "./widgets/notification-box";
import {TasksBoxComponent} from "./widgets/tasks-box";
import {UserBoxComponent} from "./widgets/user-box"

let widgets = [
    AppComponent,
    AppHeaderComponent,
    MenuAsideComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
];

import {UserService} from "./services/user.service";
import {MessagesService} from "./services/messages.service";

let services = [
    UserService,
    MessagesService
];

import {HomeComponent} from './pages/home/home.component';
import {PageNumComponent} from './pages/page-num/page-num.component';
import {ClientComponent} from './pages/client/client.component';
import {BreacrumbsComponent} from './pages/fragments/breadcrumbs/breadcrumbs.component';

let pages = [
    HomeComponent,
    PageNumComponent,
    ClientComponent,
    DashboardComponent,
    CalendarComponent
];

let pageFragments = [
    BreacrumbsComponent
];

//main bootstrap
import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {SystemAlertComponent} from './widgets/system-alert/system-alert.component';
import {AgmCoreModule} from 'angular2-google-maps/core';

@NgModule({
    declarations: [
        ...widgets,
        ...pages,
        ...pageFragments,
        SystemAlertComponent
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
        ...services
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
