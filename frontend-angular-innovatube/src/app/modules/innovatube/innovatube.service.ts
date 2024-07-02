import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InnovatubeService {
  constructor(
    private _http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  private apiUrl = 'http://localhost:3000/api/v1';

  getVideos(query?: string): Observable<any> {
    const url = query ? `${this.apiUrl}/searchVideos?q=${query}` : `${this.apiUrl}/searchVideos`;
    return this._http.get(url);
  }
}
