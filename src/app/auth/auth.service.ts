import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap, map, Observable, catchError, throwError, of, BehaviorSubject, async} from 'rxjs';
import {UserStorageService} from "./user-storage.service";
import {environment} from "../environments/environment";
import {User} from "../model/user";

const BASIC_URL = environment['BASIC_URL'];
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  session: any;
  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$: Observable<boolean> = this.isAdminSubject.asObservable();
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(
    private http: HttpClient,
    private userStorageService: UserStorageService
  ) {
    this.checkAdminRights();
  }

  private checkAdminRights(): void {
    this.myCredentials().subscribe(user => {
      this.isLoggedInSubject.next(user !== null);
      this.isAdminSubject.next(user !== null ? user.role === 'ADMIN' : false);
    });
  }

  login(email: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email, password };
    // const body = { "email": email, "password": password };

    return this.http.post(BASIC_URL + 'auth/signin', body, { headers, observe: 'response' }).pipe(
      map((res) => {
        const tokenResponse = res.body;
        if (tokenResponse) {
          this.userStorageService.saveToken(tokenResponse["token"]);
          this.checkAdminRights();
          return true;
        }
        this.checkAdminRights();
        return false;
      }),
      catchError((error) => {
        console.error('Login Error:', error);
        return throwError(error);
      })
    );
  }

  logout() {
    this.userStorageService.signOut();
    this.session = undefined;
    this.checkAdminRights();
  }

  register(addProductRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "product", addProductRequest);
  }

  myCredentials(): Observable<User> {
    return this.http.get<User>(BASIC_URL + "public/user/my");
  }

  // getUserById(): Observable<any> {
  //   const userId = UserStorageService.getUserId();
  //   return this.http.get<[]>(`${BASIC_URL}api/user/${userId}`, {
  //     headers: this.createAuthorizationHeader(),
  //   }).pipe(
  //     tap((_) => this.log('User Fetched successfully')),
  //     catchError(this.handleError<[]>('Error Fetching User', []))
  //   );
  // }
  //
  // updateUser(data): Observable<any> {
  //   return this.http.post<[]>(`${BASIC_URL}api/update`, data, {
  //     headers: this.createAuthorizationHeader(),
  //   }).pipe(
  //     tap((_) => this.log('User Updated successfully')),
  //     catchError(this.handleError<[]>('Error Updating User', []))
  //   );
  // }

  // updatePassword(changePasswordDto: any): Observable<any> {
  //   changePasswordDto.id = UserStorageService.getUserId();
  //   return this.http.post<[]>(`${BASIC_URL}api/updatePassword`, changePasswordDto, {
  //     headers: this.createAuthorizationHeader(),
  //   }).pipe(
  //     tap((_) => this.log('Password Updated successfully')),
  //     catchError(this.handleError<[]>('Error Updating Password', []))
  //   );
  // }

  // Track Order

  getOrderByTrackingId(trackingId: number): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}order/${trackingId}`)
      .pipe(
        tap((_) => this.log('Order fetched successfully')),
        catchError(this.handleError<[]>('Error getting Order', []))
      );
  }

  private createAuthorizationHeader(): HttpHeaders {
    if (UserStorageService.isCustomerLoggedIn()) {
      return new HttpHeaders().set(
        'Authorization',
        'Bearer ' + UserStorageService.getToken()
      );
    }
    return new HttpHeaders();
  }

  private log(message: string): void {
    console.log(`User Auth Service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

