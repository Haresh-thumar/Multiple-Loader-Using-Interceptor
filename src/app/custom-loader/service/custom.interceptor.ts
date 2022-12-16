import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CustomLoaderService } from './custom-loader.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private UI: CustomLoaderService,) { }

  /*========== for custom CSS Loader ==========*/
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(event => {
        this.UI.loader.next(true);
        if (event.type == HttpEventType.Response) {
          if (event.status == 200) {
            this.UI.loader.next(false);
          }
        }
      })
    )
  }
}
