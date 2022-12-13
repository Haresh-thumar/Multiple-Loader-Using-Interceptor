import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressBarComponent } from './mat-progress-bar.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentFileComponent } from './student-file/student-file.component';

const routes: Routes = [
  { path: '', redirectTo: 'matProgressBar', pathMatch: 'full' },
  {
    path: 'matProgressBar', component: MatProgressBarComponent,
    children: [
      { path: '', redirectTo: 'studentData', pathMatch: 'full' },
      { path: 'studentData', component: StudentDataComponent },
      { path: 'studentFile', component: StudentFileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatPregressBarRoutingModule { }
