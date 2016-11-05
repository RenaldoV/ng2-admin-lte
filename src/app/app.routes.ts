import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {CalendarComponent} from "./pages/calendar/calendar.component";

// Components

const routes:Routes = [
    // Root
    {path: '', component: DashboardComponent},
    {path: 'calendar', component: CalendarComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
