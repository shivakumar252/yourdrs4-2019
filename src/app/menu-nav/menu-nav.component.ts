import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { View, EventSettingsModel, GroupModel, ResourceDetails, TreeViewArgs, ActionEventArgs, EventFieldsMapping, PopupOpenEventArgs, RenderCellEventArgs } from '@syncfusion/ej2-schedule';
import { extend } from 'webdriver-js-extender';
import { doctorData } from '../data';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { addClass } from '@syncfusion/ej2-base';
// import { FormControl } from '@angular/forms';
import {startWith, map} from 'rxjs/operators';
@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})

export class MenuNavComponent implements OnInit {
  myCases=false;
  officeDashboard = false;
  adjusterDashboard = false;
 closeResult: string;
  selectedOption:string;
  control = new FormControl();
   public searchData: { [key: string]: Object }[] = [
    { Name: 'Australia', Code: 'AU',Provider:'ABC',speciality:'a' },
    { Name: 'Bermuda', Code: 'BM',Provider:'ABC',speciality:'b' },
    { Name: 'Canada', Code: 'CA',Provider:'ABC',speciality:'c' },
    { Name: 'Cameroon', Code: 'CM',Provider:'ABC',speciality:'d' },
    { Name: 'Denmark', Code: 'DK',Provider:'ABC',speciality:'e' },
    { Name: 'France', Code: 'FR',Provider:'ABC',speciality:'a' },
    { Name: 'Finland', Code: 'FI',Provider:'ABC',speciality:'b' },
    { Name: 'Germany', Code: 'DE',Provider:'ABC' ,speciality:'b'},
    { Name: 'Greenland', Code: 'GL',Provider:'ABC',speciality:'b' },
    { Name: 'Hong Kong', Code: 'HK',Provider:'ABC' ,speciality:'b'},
    { Name: 'India', Code: 'IN',Provider:'ABC',speciality:'b' },
    { Name: 'Italy', Code: 'IT' ,Provider:'ABC',speciality:'b'},
    { Name: 'Japan', Code: 'JP' ,Provider:'ABC',speciality:'b'},
    { Name: 'Mexico', Code: 'MX',Provider:'ABC',speciality:'b' },
    { Name: 'Norway', Code: 'NO',Provider:'ABC',speciality:'b' },
    { Name: 'Poland', Code: 'PL',Provider:'ABC',speciality:'b' },
    { Name: 'Switzerland', Code: 'CH',Provider:'ABC',speciality:'b' },
    { Name: 'United Kingdom', Code: 'GB',Provider:'ABC',speciality:'b' },
    { Name: 'United States', Code: 'US',Provider:'ABC',speciality:'b' }];
    // maps the appropriate column to fields property
    public fields: Object = { value: "Name" };
    // set the placeholder to the AutoComplete input
    public text: string = "Find a country";
    //enable the highlight property to highlight the matched character in suggestion list
    public autofill: Boolean = true;

    public searchData1: { [key: string]: Object }[] = [
      { Name: 'Australia', Code: 'AU',Provider:'ABC',speciality:'b' },
      { Name: 'Bermuda', Code: 'BM',Provider:'DEF',speciality:'b' },
      { Name: 'Canada', Code: 'CA',Provider:'GHI',speciality:'b'},
      { Name: 'Cameroon', Code: 'CM',Provider:'GHI',speciality:'b' },
      { Name: 'Denmark', Code: 'DK',Provider:'GHI',speciality:'b'},
      { Name: 'France', Code: 'FR',Provider:'GHI',speciality:'b'},
      { Name: 'Finland', Code: 'FI' ,Provider:'GHI',speciality:'b'},
      { Name: 'Germany', Code: 'DE' ,Provider:'GHI',speciality:'b'},
      { Name: 'Greenland', Code: 'GL' ,Provider:'GHI',speciality:'b'},
      { Name: 'Hong Kong', Code: 'HK' ,Provider:'GHI',speciality:'b'},
      { Name: 'India', Code: 'IN',Provider:'GHI',speciality:'b' },
      { Name: 'Italy', Code: 'IT',Provider:'GHI',speciality:'b' },
      { Name: 'Japan', Code: 'JP' ,Provider:'GHI',speciality:'b'},
      { Name: 'Mexico', Code: 'MX',Provider:'GHI',speciality:'b' },
      { Name: 'Norway', Code: 'NO',Provider:'GHI',speciality:'b' },
      { Name: 'Poland', Code: 'PL',Provider:'GHI',speciality:'b'},
      { Name: 'Switzerland', Code: 'CH',Provider:'GHI',speciality:'b' },
      { Name: 'United Kingdom', Code: 'GB',Provider:'GHI',speciality:'b' },
      { Name: 'United States', Code: 'US',Provider:'GHI',speciality:'b' }];
      // maps the appropriate column to fields property
      public fields1: Object = { value: "Code" };
      // set the placeholder to the AutoComplete input
      public text1: string = "Find a code";
      //enable the highlight property to highlight the matched character in suggestion list
      public autofill1: Boolean = true;

      public searchData2: { [key: string]: Object }[] = [
        { Name: 'Australia', Code: 'AU',Provider:'ABC',speciality:'b' },
        { Name: 'Bermuda', Code: 'BM',Provider:'DEF',speciality:'b' },
        { Name: 'Canada', Code: 'CA' ,Provider:'GHI',speciality:'b'},
        { Name: 'Cameroon', Code: 'CM',Provider:'GHI' ,speciality:'b'},
        { Name: 'Denmark', Code: 'DK',Provider:'GHI',speciality:'b' },
        { Name: 'France', Code: 'FR' ,Provider:'GHI',speciality:'b'},
        { Name: 'Finland', Code: 'FI',Provider:'GHI' ,speciality:'b'},
        { Name: 'Germany', Code: 'DE' ,Provider:'ABC',speciality:'b'},
        { Name: 'Greenland', Code: 'GL',Provider:'ABC',speciality:'b' },
        { Name: 'Hong Kong', Code: 'HK',Provider:'ABC',speciality:'b' },
        { Name: 'India', Code: 'IN' ,Provider:'ABC',speciality:'b'},
        { Name: 'Italy', Code: 'IT',Provider:'ABC',speciality:'b' },
        { Name: 'Japan', Code: 'JP',Provider:'ABC',speciality:'b'},
        { Name: 'Mexico', Code: 'MX',Provider:'ABC',speciality:'b' },
        { Name: 'Norway', Code: 'NO' ,Provider:'ABC',speciality:'b'},
        { Name: 'Poland', Code: 'PL',Provider:'ABC',speciality:'b' },
        { Name: 'Switzerland', Code: 'CH',Provider:'ABC',speciality:'b' },
        { Name: 'United Kingdom', Code: 'GB',Provider:'ABC',speciality:'b' },
        { Name: 'United States', Code: 'US',Provider:'ABC',speciality:'b' }];
        // maps the appropriate column to fields property
        public fields2: Object = { value: "Provider" };
        // set the placeholder to the AutoComplete input
        public text2: string = "Find a Provider";
        //enable the highlight property to highlight the matched character in suggestion list
        public autofill2: Boolean = true;

        public searchData3: { [key: string]: Object }[] = [
          { Name: 'Australia', Code: 'AU',Provider:'ABC',speciality:'b' },
          { Name: 'Bermuda', Code: 'BM',Provider:'DEF',speciality:'b' },
          { Name: 'Canada', Code: 'CA' ,Provider:'GHI',speciality:'b'},
          { Name: 'Cameroon', Code: 'CM',Provider:'GHI' ,speciality:'b'},
          { Name: 'Denmark', Code: 'DK',Provider:'GHI',speciality:'b' },
          { Name: 'France', Code: 'FR' ,Provider:'GHI',speciality:'b'},
          { Name: 'Finland', Code: 'FI',Provider:'GHI' ,speciality:'b'},
          { Name: 'Germany', Code: 'DE' ,Provider:'ABC',speciality:'b'},
          { Name: 'Greenland', Code: 'GL',Provider:'ABC',speciality:'b' },
          { Name: 'Hong Kong', Code: 'HK',Provider:'ABC',speciality:'b' },
          { Name: 'India', Code: 'IN' ,Provider:'ABC',speciality:'b'},
          { Name: 'Italy', Code: 'IT',Provider:'ABC',speciality:'b' },
          { Name: 'Japan', Code: 'JP',Provider:'ABC',speciality:'b'},
          { Name: 'Mexico', Code: 'MX',Provider:'ABC',speciality:'b' },
          { Name: 'Norway', Code: 'NO' ,Provider:'ABC',speciality:'b'},
          { Name: 'Poland', Code: 'PL',Provider:'ABC',speciality:'b' },
          { Name: 'Switzerland', Code: 'CH',Provider:'ABC',speciality:'b' },
          { Name: 'United Kingdom', Code: 'GB',Provider:'ABC',speciality:'b' },
          { Name: 'United States', Code: 'US',Provider:'ABC',speciality:'b' }];
          // maps the appropriate column to fields property
          public fields3: Object = { value: "speciality" };
          // set the placeholder to the AutoComplete input
          public text3: string = "Find a Provider";
          //enable the highlight property to highlight the matched character in suggestion list
          public autofill3: Boolean = true;






    public data: Object[] = <Object[]>extend([], doctorData);
    public selectedDate: Date = new Date(2018, 3, 1);
    public currentView: View = 'WorkWeek';
    public allowResizing: boolean = false;
    public allowDragDrop: boolean = false;
    public resourceDataSource: Object[] = [

        { text: 'Hema@ 38 Astoria', id: 1, color: '',  workDays: [1, 2],startHour: '02:00', endHour: '07:00' },
        { text: 'Hema@ 45 DEAN', id: 2, color: '', workDays: [1, 3, 5], startHour: '12:00', endHour: '08:00' },
        { text: 'Hema@ 45 West NY ', id: 3, color: '', startHour: '11:00', endHour: ':00' }
    ];
    public group: GroupModel = { resources: ['Doctors'] };
    public eventSettings: EventSettingsModel = {
        dataSource: this.data,
        fields: {
            subject: { title: 'Service Type', name: 'Subject' },
            location: { title: 'Patient Name', name: 'Location' },
            description: { title: 'Summary', name: 'Description' },
            startTime: { title: 'From', name: 'StartTime' },
            endTime: { title: 'To', name: 'EndTime' }
        }
    };
    // @ViewChild('scheduleObj')
    public scheduleObj: ScheduleComponent;
  constructor(private modalService: NgbModal) { }
  getDoctorName(value: ResourceDetails | TreeViewArgs): string {
    return ((value as ResourceDetails).resourceData) ?
        (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string
        : (value as TreeViewArgs).resourceName;
}
getDoctorImage(value: ResourceDetails | TreeViewArgs): string {
    let resourceName: string = this.getDoctorName(value);
    return resourceName.replace(' ', '-').toLowerCase();
}
getDoctorLevel(value: ResourceDetails | TreeViewArgs): string {
    let resourceName: string = this.getDoctorName(value);
    return (resourceName === 'Will Smith') ? 'Capiola david' :  ( resourceName === '') ? '' : 'Dr Capiola David';
}

onActionBegin(args: ActionEventArgs): void {
    let isEventChange: boolean = (args.requestType === 'eventChange');
    if ((args.requestType === 'eventCreate' && (<Object[]>args.data).length > 0) || isEventChange) {
        let eventData: { [key: string]: Object } = (isEventChange) ? args.data as { [key: string]: Object } :
            args.data[0] as { [key: string]: Object };
        let eventField: EventFieldsMapping = this.scheduleObj.eventFields;
        let startDate: Date = eventData[eventField.startTime] as Date;
        let endDate: Date = eventData[eventField.endTime] as Date;
        let resourceIndex: number = [1, 2, 3].indexOf(eventData.DoctorId as number);
        args.cancel = !this.isValidateTime(startDate, endDate, resourceIndex);
        if (!args.cancel) {
            args.cancel = !this.scheduleObj.isSlotAvailable(startDate, endDate, resourceIndex);
        }
    }
}

isValidateTime(startDate: Date, endDate: Date, resIndex: number): boolean {
    let resource: ResourceDetails = this.scheduleObj.getResourcesByIndex(resIndex);
    let startHour: number = parseInt(resource.resourceData.startHour.toString().slice(0, 2), 10);
    let endHour: number = parseInt(resource.resourceData.endHour.toString().slice(0, 2), 10);
    return (startHour <= startDate.getHours() && endHour >= endDate.getHours());
}

onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.target && args.target.classList.contains('e-work-cells')) {
        args.cancel = !args.target.classList.contains('e-work-hours');
    }
}

onRenderCell(args: RenderCellEventArgs): void {
    if (args.element.classList.contains('e-work-hours') || args.element.classList.contains('e-work-cells')) {
        addClass([args.element], ['willsmith', 'alice', 'robson'][parseInt(args.element.getAttribute('data-group-index'), 10)]);
    }
}

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
  map(value => this._filter(value))
    );



  }


  openEdit(contents) {
    // this.modalService.open(contents, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
    this.modalService.open(contents, {size:'xl'});
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }


  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  onClickOD() {
    this.officeDashboard =true;
    this.adjusterDashboard =false;
  }
  onClickAD() {
    this.adjusterDashboard = true ;
    this.officeDashboard = false;
  }



}




