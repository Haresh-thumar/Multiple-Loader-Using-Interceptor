import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxLoaderComponent } from './ngx-loader.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeFileComponent } from './employee-file/employee-file.component';

const routes: Routes = [
  { path: '', redirectTo: 'ngxLoader', pathMatch: 'full' },
  {
    path: 'ngxLoader', component: NgxLoaderComponent,
    children: [
      { path: '', redirectTo: 'employeeData', pathMatch: 'full' },
      { path: 'employeeData', component: EmployeeDataComponent },
      { path: 'employeeFile', component: EmployeeFileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxLoaderRoutingModule { }
