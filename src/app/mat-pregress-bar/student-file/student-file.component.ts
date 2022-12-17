import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../services/json-data.service';
import { Subscription, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-student-file',
  templateUrl: './student-file.component.html',
  styleUrls: ['./student-file.component.scss']
})
export class StudentFileComponent implements OnInit {

  jsonComment: any = [];

  subscription !: Subscription;

  constructor(private _studentFile: JsonDataService) { }

  ngOnInit(): void {
    this.getComment();
  }

  getComment() {
    this.subscription = timer(2000).pipe(
      switchMap(() => this._studentFile.getComment())).subscribe(res => {
        this.jsonComment = res;
      });

    // setTimeout(() => {
    //   this._studentFile.getComment().subscribe(res => {
    //     this.jsonComment = res;
    //   })
    // }, 2000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
