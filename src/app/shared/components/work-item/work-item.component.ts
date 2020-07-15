import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Work } from 'src/app/core/models/work';
import { Enum_Status } from 'src/app/core/enums/enums';
import { AlertService } from 'src/app/core/services/alert.service';
import { DataService } from 'src/app/core/services/data.service';
import { ToolsService } from 'src/app/core/services/tools.service';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {


  @Input('work') work : Work;
  @Output() onDeleteWork = new EventEmitter();

  get enumStatus () {return Enum_Status}

  constructor(private svcAlert:AlertService, private svcData:DataService, private svcTools:ToolsService) { }

  ngOnInit(): void {
  }

  getImportanceInfo(importance)
  {

    console.log(this.svcTools.getImportanceInfo(importance));
    return this.svcTools.getImportanceInfo(importance);
  }

  deleteWork(workId) {
    this.svcAlert
      .ConfirmAlert(
        "Evet",
        "Hayır",
        "İşlem Onayı",
        "Kaydı silmek istediğinize emin misiniz?",
        "question"
      )
      .then((isOk) => {
        if (isOk.value) {
          this.svcData.DeleteWork(workId).subscribe((result) => {
            if (result.isSuccess == 1) {
              this.svcAlert.SuccessAlert(result.message, 1000);
              this.onDeleteWork.emit();
            } else {
              this.svcAlert.NotifyAlert('Tamam','Hata',result.message + ' - ('+result.metotCode+')','error');
            }
          });
        }
      });
  }

  finishWork(workId){
    this.svcAlert
    .ConfirmAlert(
      "Evet",
      "Hayır",
      "İşlem Onayı",
      "Görev tamamlandı olarak kaydedilecektir. Onaylıyor musunuz?",
      "question"
    )
    .then((isOk) => {
      if (isOk.value) {
        this.svcData.FinishWork(workId).subscribe((result) => {
          if (result.isSuccess == 1) {
            this.svcAlert.SuccessAlert(result.message, 1000);
          } else {
            this.svcAlert.NotifyAlert('Tamam','Hata',result.message + ' - ('+result.metotCode+')','error');
          }
        });
      }
    });
  }

  startWork(workId:number){
    this.svcAlert
    .ConfirmAlert(
      "Evet",
      "Hayır",
      "İşlem Onayı",
      "Göreve başlamak istediğinize emin misiniz?",
      "question"
    )
    .then((isOk) => {
      if (isOk.value) {
        this.svcData.StartWork(workId).subscribe((result) => {
          if (result.isSuccess == 1) {
            this.svcAlert.SuccessAlert(result.message, 1000);
          } else {
            this.svcAlert.NotifyAlert('Tamam','Hata',result.message + ' - ('+result.metotCode+')','error');
          }
        });
      }
    });
  }

}
