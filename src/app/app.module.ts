import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatCheckboxModule} from '@angular/material';
import { AppointmentsdashboardComponent } from './appointmentsdashboard/appointmentsdashboard.component';
import { AppointmentschedulerComponent } from './appointmentscheduler/appointmentscheduler.component';
import { MycasesComponent } from './mycases/mycases.component';
import { routing } from './app.routing';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleAllModule,  } from '@syncfusion/ej2-angular-schedule';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    AppointmentsdashboardComponent,
    AppointmentschedulerComponent,
    MycasesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatToolbarModule, routing,
    MatTabsModule, MatMenuModule,MatIconModule,
    MatSelectModule,NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    DateTimePickerAllModule,
    DatePickerAllModule,
    DatePickerModule,
    ScheduleAllModule,
    CommonModule,HttpClientModule,
     AutoCompleteModule,MatAutocompleteModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
