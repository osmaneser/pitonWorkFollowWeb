import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { AlertService } from '../core/services/alert.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {




  selectedValue:any;
  selecList:any[] = [];

  addWorkForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private svcData:DataService, private svcAlert:AlertService, private router:Router) {

    this.addWorkForm = new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl(''),
      importance: new FormControl('',Validators.required),
      workDate: new FormControl('',Validators.required)
    });

  }

  ngOnInit(): void {
    this.selecList = [
      {id:1, optionName: "Önemsiz"},
      {id:2, optionName: "Normal"},
      {id:3, optionName: "Önemli"},
      {id:4, optionName: "Kritik"}
    ]
  }

  addWork(){
    console.log(this.addWorkForm);

    if (this.addWorkForm.valid) {
      this.svcData.AddWork(this.addWorkForm.value).subscribe((result)=>{
        if (result.isSuccess == 1) {
          this.svcAlert.SuccessAlert(result.message,2000);
          this.router.navigate(['/dashboard'])
        }
        else{
          this.svcAlert.NotifyAlert('Tamam','Hata',result.message + ' - ('+result.metotCode+')','error');
        }
      })
    }
    else{
      this.svcAlert.NotifyAlert('Tamam','Hata','Lütfen zorunlu alanları doldurunuz.','error')
    }
  }



}
