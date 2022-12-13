import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLoaderComponent } from './custom-loader.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserFileComponent } from './user-file/user-file.component';

const routes: Routes = [
  { path: '', redirectTo: 'customLoader', pathMatch: 'full' },
  {
    path: 'customLoader', component: CustomLoaderComponent,
    children: [
      { path: '', redirectTo: 'userData', pathMatch: 'full' },
      { path: 'userData', component: UserDataComponent },
      { path: 'userFile', component: UserFileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomLoaderRoutingModule { }
