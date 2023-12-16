// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
// import {UserStorageService} from "../auth/user-storage.service";
//
// @Injectable()
// export class ApiHeadersInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     });
//
//     if (req.url.indexOf('/auth/') < 0) {
//       headers = headers.append('Authorization', 'Bearer ' + UserStorageService.getToken());
//     }
//
//     const modifiedReq = req.clone({
//       headers: headers,
//     });
//
//     return next.handle(modifiedReq);
//   }
// }
