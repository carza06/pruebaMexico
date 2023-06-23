import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './equipment/home/home.component';
import { PruebaComponent } from './prueba/prueba.component';
import { BoardUserComponent } from './equipment/board-user/board-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'agregar', component: BoardUserComponent },
  { path: 'ping', component: PruebaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }