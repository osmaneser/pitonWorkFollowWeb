
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultValue } from '../models/result';
import { Work } from '../models/work';
import { Enum_Status } from '../enums/enums';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  WorkList :Work[];
  result:ResultValue;
  resultValue = new Observable<ResultValue>(observer=>{
    observer.next(this.result);
  })

  constructor() {

    let today :Date;
    today = new Date();
    this.WorkList = [
      {
        id:1,
        name:'Alışveriş',
        description:'Soğan Domates Alınacak',
        importance:1,
        status:200,
        workDate:new Date("2020-07-22T00:00:00"),
        startDate:new Date("2020-07-22T00:00:00"),
        endDate:new Date("2020-07-23T00:00:00"),
      },

      {
        id:2,
        name:'Yıkama',
        description:'Araba yıkanacak',
        importance:2,
        status:200,
        workDate:new Date("2020-08-02T00:00:00"),
        startDate:new Date("2020-07-03T00:00:00"),
        endDate:new Date("2020-07-05T00:00:00"),
      },

      {
        id:3,
        name:'Boyama',
        description:'Ev Boyanacak',
        importance:2,
        status:300,
        workDate:new Date("2020-06-29T00:00:00"),
        startDate:new Date("2020-06-30T00:00:00"),
        endDate:null
      },

      {
        id:4,
        name:'Spor',
        description:'Spor Yapılacak',
        importance:2,
        status:100,
        workDate:new Date("2020-09-30T00:00:00"),
        startDate:null,
        endDate:null
      },

      {
        id:5,
        name:'Benzin Al',
        description:'Arabaya Benzin Alınacak',
        importance:4,
        status:400,
        workDate:new Date("2020-06-29T00:00:00"),
        startDate:null,
        endDate:null
      },

      {
        id:6,
        name:'Keman Dersi',
        description:'Keman dersi için defter kitap hazırlıkları yapılacak',
        importance:3,
        status:100,
        workDate:new Date("2020-08-29T00:00:00"),
        startDate:null,
        endDate:null
      }
    ]

  }

  ////Metot Code: 001
  AddWork(work:Work){

    // Front-end tarafından form validation herhangi bir şekilde atlatılırsa burada tekrar kontrol edilir.

    if (work.name != "" && work.workDate != null &&  work.importance != null) {
      this.WorkList.push({
        id:this.WorkList.length + 1,
        description: work.description,
        endDate: null,
        importance: work.importance,
        name: work.name,
        startDate: null,
        status: 100,
        workDate: new Date(new Date(work.workDate).setHours(0,0,0,0)),
      });

      this.result = {
        isSuccess:1,
        metotCode:"001",
        values:work,
        message:"İşlem Başarılı"
      };

    }
    else {
      this.result = {
        isSuccess:0,
        metotCode:"001",
        values:work,
        message:"İşleminiz Sırasında Hata Oluştu"
      };
    }


    return this.resultValue;

  }

  ////Metot Code: 002
  DeleteWork(workId:number){

    if (workId == undefined || workId == null) {

      this.result = {
        isSuccess:0,
        metotCode:"002",
        values:'',
        message:"Herhangi bir görev bulunamadı"
      };

    }
    else {

      let fIndex = this.WorkList.findIndex(w=>w.id==workId);
      this.WorkList.splice(fIndex,1);

      this.result = {
        isSuccess:1,
        metotCode:"001",
        values:'',
        message:"Silme İşlemi Başarılı"
      };

    }

    return this.resultValue;

  }


  ////Metot Code: 003
  FinishWork(workId:number){

    if (workId == undefined || workId == null) {

      this.result = {
        isSuccess:0,
        metotCode:"003",
        values:'',
        message:"Herhangi bir görev bulunamadı"
      };

    } else {
      let find_work = this.WorkList.find(w=>w.id==workId);

      find_work.status = Enum_Status.Done;

      this.result = {
        isSuccess:1,
        metotCode:"003",
        values:'',
        message:"Görev tamamlandı."
      };
    }


    return this.resultValue;
  }

  ////Metot Code: 004
  StartWork(workId:number){

    if (workId == undefined || workId == null) {

      this.result = {
        isSuccess:0,
        metotCode:"004",
        values:'',
        message:"Herhangi bir görev bulunamadı"
      };

    }
    else {

      let find_work = this.WorkList.find(w=>w.id==workId);

      find_work.status = Enum_Status.Continue;

      this.result = {
        isSuccess:1,
        metotCode:"004",
        values:'',
        message:"Göreve başlandı."
      };

    }

    return this.resultValue;
  }

  ////Metot Code: 005
  FindWork(workId:number){

    if (workId == undefined || workId == null) {

      this.result = {
        isSuccess:0,
        metotCode:"005",
        values:'',
        message:"Herhangi bir görev bulunamadı"
      };

    }
    else {

      let find_work = this.WorkList.find(w=>w.id==workId);

      this.result = {
        isSuccess:1,
        metotCode:"005",
        values:find_work,
        message:"İşleminiz Başarıyla gerçekleştirildi."
      };

    }

    return this.resultValue;
  }
}
