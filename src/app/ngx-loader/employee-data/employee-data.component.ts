import { EmployeeDataService } from './../services/employee-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  employeeData: any = [];

  constructor(private _employeeData: EmployeeDataService) { }

  ngOnInit(): void {
    this._employeeData.getPost().subscribe((res) => {
      this.employeeData = res;
    });
  }

}
