import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';



@NgModule({
  declarations: [TableComponent, CustomDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
