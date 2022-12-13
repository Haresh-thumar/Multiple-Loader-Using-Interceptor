import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-pregress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['./mat-progress-bar.component.scss']
})
export class MatProgressBarComponent implements OnInit {

  toggle = true;

  constructor() { }

  ngOnInit(): void {
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
  }

}
