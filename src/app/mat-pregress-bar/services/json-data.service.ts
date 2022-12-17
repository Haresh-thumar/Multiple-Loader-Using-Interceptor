import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private _httpClient: HttpClient) { }

  // Get Fake Api from Json-PLaceholder
  getPost(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComment(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/comments');
  }

}
