import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customLoader',
    pathMatch: 'full'
  },
  {
    path: 'customLoader',
    loadChildren: () => import('./custom-loader/custom-loader.module').then(mod => mod.CustomLoaderModule)
  },
  {
    path: 'matProgressBar',
    loadChildren: () => import('./mat-pregress-bar/mat-progress-bar.module').then(mod => mod.MatProgressBarModule)
  },
  {
    path: 'ngxLoader',
    loadChildren: () => import('./ngx-loader/ngx-loader.module').then(mod => mod.NgxLoaderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
