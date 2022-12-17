import { EmployeeDataService } from './../services/employee-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-file',
  templateUrl: './employee-file.component.html',
  styleUrls: ['./employee-file.component.scss']
})
export class EmployeeFileComponent implements OnInit {

  employeeComment: any = [];

  constructor(private _employeeComment: EmployeeDataService) { }

  ngOnInit(): void {
    this.gerData();
  }

  gerData() {
    this._employeeComment.getComment().subscribe((res) => {
      this.employeeComment = res;
    });
  }

}
