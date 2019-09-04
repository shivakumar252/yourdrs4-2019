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
  streets: string[] = ['Any', 'Hema', 'parkwest surgical LLT', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;
  keyword = 'location';
  public countries = [
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:'',

    },
    {
      practice:'xyz',
      location: 'brazil',
      provider:'1',
      speciality:'',
    },
    {
      practice: '1',
      location: 'Albania',
      provider:'1',
      speciality:'',
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:'',
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:''
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:''
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:''
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:''
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:''
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:''
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:''
    },
    {
      practice: '',
      location: 'Albania',
      provider:'1',
      speciality:''
    }
  ];
    selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
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




