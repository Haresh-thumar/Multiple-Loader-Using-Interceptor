import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private _httpClient: HttpClient) { }

  // Get Fake Api from Json-PLaceholder
  getPost(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComment(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/comments');
  }
}
