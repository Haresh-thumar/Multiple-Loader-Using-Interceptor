import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MatLoaderService } from './services/mat-loader.service';

@Component({
  selector: 'app-mat-pregress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['./mat-progress-bar.component.scss']
})
export class MatProgressBarComponent implements OnInit {

  toggle = true;

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: MatLoaderService) {
  }

  ngOnInit(): void {
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
  }

}
