import {Component} from '@angular/core';
import {ShoppingListComponent} from "./view/shopping-list/shopping-list.component";
import {UserStorageService} from "./auth/user-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  protected readonly UserStorageService = UserStorageService;
}
