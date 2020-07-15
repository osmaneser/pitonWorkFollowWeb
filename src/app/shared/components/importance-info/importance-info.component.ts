import { Component, OnInit, Input } from '@angular/core';
import { Enum_Importance } from 'src/app/core/enums/enums';
import { ToolsService } from 'src/app/core/services/tools.service';

@Component({
  selector: 'app-importance-info',
  templateUrl: './importance-info.component.html',
  styleUrls: ['./importance-info.component.css']
})
export class ImportanceInfoComponent implements OnInit {

  constructor(private svcTools:ToolsService) { }

  @Input('percent') percent:Number;
  @Input('avarage') avarage:Number;
  @Input('importanceValue') importanceValue:Enum_Importance;

  get enumImportance() {return Enum_Importance};

  getImportanceValue(importanceValue) {

    return this.svcTools.getImportanceInfo(importanceValue);

  }

  ngOnInit(): void {
  }

}
