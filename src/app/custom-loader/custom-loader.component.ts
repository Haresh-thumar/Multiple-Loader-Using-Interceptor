import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrls: ['./custom-loader.component.scss']
})
export class CustomLoaderComponent implements OnInit {

  toggle = true;

  userFile: any;

  constructor() { }

  ngOnInit(): void {
    this
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
  }

}
