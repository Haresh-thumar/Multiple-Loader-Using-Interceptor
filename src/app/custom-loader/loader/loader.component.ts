import { Component, OnInit } from '@angular/core';
import { CustomLoaderService } from '../service/custom-loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loader: any;

  constructor(private UiLoader: CustomLoaderService) {
    this.UiLoader.loader.subscribe(LoaderRes => {
      this.loader = LoaderRes;
    })
  }

  ngOnInit(): void {
  }

}
