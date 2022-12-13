import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPregressBarRoutingModule } from './mat-progress-bar-routing.module';
import { MatProgressBarComponent } from './mat-progress-bar.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentFileComponent } from './student-file/student-file.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MatProgressBarComponent,
    StudentDataComponent,
    StudentFileComponent
  ],
  imports: [
    CommonModule,
    MatPregressBarRoutingModule,
    MatButtonModule
  ]
})
export class MatProgressBarModule {
  constructor() {
    console.warn("Mat Progress Bar Module Is Loaded...!");
  }
}
