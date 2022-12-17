import { MatLoaderInterceptor } from './services/mat-loader.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPregressBarRoutingModule } from './mat-progress-bar-routing.module';
import { MatProgressBarComponent } from './mat-progress-bar.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentFileComponent } from './student-file/student-file.component';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JsonDataService } from './services/json-data.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    MatProgressBarComponent,
    StudentDataComponent,
    StudentFileComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule,
    MatPregressBarRoutingModule,
  ],
  providers: [JsonDataService,
    { provide: HTTP_INTERCEPTORS, useClass: MatLoaderInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MatProgressBarModules {
  constructor() {
    console.warn("Mat Progress Bar Module Is Loaded...!");
  }
}
