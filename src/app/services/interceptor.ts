import { Injectable, SkipSelf } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { AuthentificationService } from './authentification.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private authService:AuthentificationService, private router:Router) { }
 
   intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.authService.getToken();

    let uRequest = request.clone({
      headers: request.headers.append('x-access-token', token || "")
    });

    return next.handle(uRequest).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              /* console.log('event--->>>', event); */
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
          if(error.error.message == 'No token' || error.error.message == 'Wrong token'){
            this.authService.logout();
            this.router.navigateByUrl("/login");
          }
          return throwError(error);
      }));
  } 
}