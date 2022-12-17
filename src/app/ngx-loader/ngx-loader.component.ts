import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-ngx-loader',
  templateUrl: './ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.scss']
})
export class NgxLoaderComponent implements OnInit {

  toggle = true;

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
  }

}
