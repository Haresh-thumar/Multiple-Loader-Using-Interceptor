import { Subscription, switchMap, timer } from 'rxjs';
import { JsonDataService } from '../services/json-data.service';
import { MatLoaderService } from './../services/mat-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {

  jsonData: any = []
  subscription !: Subscription;

  constructor(private _studentData: JsonDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.subscription = timer(1500).pipe(
      switchMap(() => this._studentData.getPost())).subscribe(res => {
        this.jsonData = res;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
