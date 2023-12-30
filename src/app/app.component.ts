import {Component} from '@angular/core';
import {UserStorageService} from "./auth/user-storage.service";
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAdmin$ = this.authService.isAdmin$;
  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  logoutClicked() {
    // this.router.navigateByUrl('/login');
    this.authService.logout()
  }

  protected readonly UserStorageService = UserStorageService;
}
