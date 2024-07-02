import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteVideoService {

  constructor(
    private _http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  private apiUrl = 'http://localhost:3000/api/v1';

  getAllFavoriteVideos(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/getAllFavoriteVideos`, data);
  }
  
  addFavoriteVideo(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/addFavoriteVideo`, data);
  }

  deleteFavoriteVideo(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/deleteFavoriteVideo`, data);
  }
}
