import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-loader',
  templateUrl: './ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.scss']
})
export class NgxLoaderComponent implements OnInit {

  toggle = true;

  constructor() { }

  ngOnInit(): void {
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
  }

}
