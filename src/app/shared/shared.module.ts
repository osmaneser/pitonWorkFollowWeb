import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkItemComponent } from './components/work-item/work-item.component';
import { ImportanceInfoComponent } from './components/importance-info/importance-info.component';
import { StatusComponent } from './components/status/status.component';



@NgModule({
  declarations: [WorkItemComponent, ImportanceInfoComponent, StatusComponent],
  imports: [
    CommonModule
  ],
  exports: [WorkItemComponent, ImportanceInfoComponent, StatusComponent]
})
export class SharedModule { }
