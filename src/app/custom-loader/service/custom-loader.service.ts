import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomLoaderService {

  constructor(private _httpClient: HttpClient) { }

  // custom loader with interceptor
  loader = new BehaviorSubject<boolean>(false);


  // Get Fake Api from Json-PLaceholder
  getPost(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComment(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/comments');
  }

}
