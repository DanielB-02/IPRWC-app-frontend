import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ItemsDisplayComponent} from "../items-display/items-display.component";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    RouterOutlet,
    ItemsDisplayComponent,
    MatButtonModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {

}
