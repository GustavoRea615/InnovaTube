import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
      private _http: HttpClient,
      private router: Router,
      private activatedRoute: ActivatedRoute
      ) {}

  private apiUrl = 'http://localhost:3000/api/v1';

  register(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/createUser`, data);
  }

  login(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/loginUser`, data);
  }

  // LOCALSTORAGE

  saveItemOnStorage(key: string, data: string): void {
    localStorage.setItem(key, data);
  }

  getItemFromStorage(key: string): any {
    return localStorage.getItem(key);
  }

  getObjectItemFromStorage(key: string): any {
    return JSON.parse(this.getItemFromStorage(key));
  }

  deleteItemFromStorage(key: string): void {
    localStorage.removeItem(key);
  }

  private clearAuthCredentials(): void {
    this.deleteItemFromStorage("token");
    this.deleteItemFromStorage("temporalToken");
    this.saveItemOnStorage("isAuthenticated", "false");
  }

  redirectToLoggedPrincipal(): void {
    this.router.navigateByUrl('/search');
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  logout(): void {
    this.clearAuthCredentials();
    this.redirectToLogin();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }


  
}
