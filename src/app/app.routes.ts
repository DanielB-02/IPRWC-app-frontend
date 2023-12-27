import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./view/login/login.component";
import {MainViewComponent} from "./view/main-view/main-view.component";
import {ShoppingListComponent} from "./view/shopping-list/shopping-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'main-view', component: MainViewComponent},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: '', redirectTo: '/main-view', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

