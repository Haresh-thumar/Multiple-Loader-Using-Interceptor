import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomLoaderRoutingModule } from './custom-loader-routing.module';
import { CustomLoaderComponent } from './custom-loader.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoaderComponent } from './loader/loader.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './service/custom.interceptor';
import { UserDataComponent } from './user-data/user-data.component';
import { UserFileComponent } from './user-file/user-file.component';
import { CustomLoaderService } from './service/custom-loader.service';


@NgModule({
  declarations: [
    CustomLoaderComponent,
    LoaderComponent,
    UserDataComponent,
    UserFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CustomLoaderRoutingModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [],
  providers: [
    CustomLoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CustomLoaderModule {
  constructor() {
    console.warn("custom Loader Module Is Loaded...!");
  }
}
