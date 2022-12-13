import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomLoaderRoutingModule } from './custom-loader-routing.module';
import { CustomLoaderComponent } from './custom-loader.component';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CustomLoaderComponent,
  ],
  imports: [
    CommonModule,
    CustomLoaderRoutingModule,
    MatButtonModule
  ]
})
export class CustomLoaderModule {
  constructor() {
    console.warn("custom Loader Module Is Loaded...!");
  }
}
