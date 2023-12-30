import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {UserStorageService} from "../auth/user-storage.service";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class ApiHeadersInterceptor implements HttpInterceptor {

  constructor(
    private userStorageService: UserStorageService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    if (req.url.indexOf('/auth/') < 0) {
      if (UserStorageService.isCustomerLoggedIn()) {
        headers = headers.append('Authorization', 'Bearer ' + UserStorageService.getToken());
      }
    }

    const modifiedReq = req.clone({
      headers: headers,
    });

    // return next.handle(modifiedReq);
    return next.handle(modifiedReq).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log("beep boop")
          this.userStorageService.signOut();
        }
        this.router.navigateByUrl('/login');
        return throwError(error);
      })
    );
    // return next.handle(modifiedReq).subscribe(response => {
    //   console.log('beep boop');
    // });
  }
}
