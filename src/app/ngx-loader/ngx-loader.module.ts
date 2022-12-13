import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxLoaderRoutingModule } from './ngx-loader-routing.module';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeFileComponent } from './employee-file/employee-file.component';
import { NgxLoaderComponent } from './ngx-loader.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NgxLoaderComponent,
    EmployeeDataComponent,
    EmployeeFileComponent
  ],
  imports: [
    CommonModule,
    NgxLoaderRoutingModule,
    MatButtonModule
  ],
})
export class NgxLoaderModule {
  constructor() {
    console.warn("NGX Loader Module Is Loaded...!");
  }
}
