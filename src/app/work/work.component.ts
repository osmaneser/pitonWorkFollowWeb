import { Component, OnInit } from '@angular/core';
import { Work } from '../core/models/work';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private svcData: DataService) { }

  selectedFilter:number = 4;
  listWork:Work[]= [];

  ngOnInit(): void {
    this.listWork =  this.svcData.WorkList;
  }


  getFilterList(type){
    this.selectedFilter = type;
    this.listWork = this.svcData.WorkList;

    let filterList:Work[] = [];
    let addWeek = new Date();
    let addMonth = new Date();

    addWeek.setDate(addWeek.getDate() + 7)
    addMonth.setDate(addMonth.getDate() + 30)

    let now = new Date().setHours(0,0,0,0);

    switch(type){
      case 1 : filterList =  this.listWork.filter(w=> w.workDate.setHours(0,0,0,0) == new Date().setHours(0,0,0,0));break;
      case 2 : filterList =  this.listWork.filter(w=>w.workDate <= new Date(addWeek) && w.workDate >= new Date(now));break;
      case 3 : filterList =  this.listWork.filter(w=>w.workDate <= new Date(addMonth) && w.workDate >= new Date(now));break;
      case 4 : filterList =  this.listWork; break;
    }

    this.listWork = []
    this.listWork = filterList;
  }

}
