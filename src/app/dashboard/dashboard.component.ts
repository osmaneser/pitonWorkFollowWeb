import { Component, OnInit } from '@angular/core';
import { Work } from '../core/models/work';
import { Enum_Status, Enum_Importance } from '../core/enums/enums';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private svcData:DataService) {

   }

  get enumImportance(){return Enum_Importance}
  listWork:Work[] = [];

  finishedCount:number;
  continuingCount:number;
  notStartCount:number;
  passDayCount:number;
  totalCount:number;

  ngOnInit() {

    this.listWork = this.svcData.WorkList;

    this.totalCount       = this.listWork.length;
    this.continuingCount  = this.listWork.filter(w=>w.status == Enum_Status.Continue).length
    this.finishedCount    = this.listWork.filter(w=>w.status == Enum_Status.Done).length
    this.notStartCount    = this.listWork.filter(w=>w.status == Enum_Status.NotStart).length
    this.passDayCount     = this.listWork.filter(w=>w.status == Enum_Status.PassDay).length

  }

  getImportanceDetail(type){
    return this.listWork.filter(w=>w.importance == type).length
  }


}
