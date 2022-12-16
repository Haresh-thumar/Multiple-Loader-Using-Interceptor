import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomLoaderService } from '../service/custom-loader.service';
import { CustomLoaderComponent } from '../custom-loader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-file',
  templateUrl: './user-file.component.html',
  styleUrls: ['./user-file.component.scss']
})
export class UserFileComponent implements OnInit {

  userFileTitle: string = 'Loader with Interceptor Get Comment using Json Api in Student Component';

  // json Api Object data save in this variable
  userComment: any = [];

  constructor(private _userData: CustomLoaderService, private route:Router) {}

  ngOnInit(): void {
    // call getData function from fetching service file api method
    this.gerData();


  }


  navTosecong(){
    this.route.navigate(['/custom-loader'], {queryParams: {data: this.userFileTitle}});
  }


  // get data from service file
  gerData() {
    this._userData.getComment().subscribe((res) => {
      this.userComment = res;
      console.log('%c[ userComment ]', 'font-size:13px; background:pink; color:#bf2c9f;', this.userComment);
    });
  }

}
