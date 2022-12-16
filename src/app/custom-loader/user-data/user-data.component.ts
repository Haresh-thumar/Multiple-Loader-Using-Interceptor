import { Component, OnInit } from '@angular/core';
import { CustomLoaderService } from '../service/custom-loader.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  userData: any = [];

  constructor(private _userData: CustomLoaderService) { }

  ngOnInit(): void {
    this._userData.getPost().subscribe((res) => {
      this.userData = res;
    });
  }

}
