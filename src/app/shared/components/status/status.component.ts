import { Component, OnInit, Input } from '@angular/core';
import { Enum_Status } from 'src/app/core/enums/enums';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }

  @Input('status') status:Enum_Status;
  @Input('count') count:Number;
  @Input('color') color: String;
  @Input('icon') icon: String;

  ngOnInit(): void {
  }

}
