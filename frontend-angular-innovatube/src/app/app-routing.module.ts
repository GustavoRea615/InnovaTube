import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/@security/components/login/login.component';
import { RegisterComponent } from './modules/@security/components/register/register.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { SearchComponent } from './modules/innovatube/components/search/search.component';
import { FavoriteComponent } from './modules/innovatube/components/favorite/favorite/favorite.component';
import { AuthGuard } from './modules/@security/components/auth-guard.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'favorite-videos', component: FavoriteComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: '**', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class AppRoutingModule { }
