import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteVideoService } from '../../../favorite-video.service';
import { SecurityService } from 'src/app/modules/@security/components/security.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorites: any[] = [];
  displayedColumns: string[] = ['_id', 'videoTitle', 'addedAt', 'actions'];  
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  constructor(
    private favoriteVideoService: FavoriteVideoService, 
    private securityService: SecurityService, 
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchFavorites();
  }

  fetchFavorites() {
    let token = this.securityService.getItemFromStorage("token");
    console.log("token", token);
    this.favoriteVideoService.getAllFavoriteVideos({"token": token}).subscribe(
      response => {
        this.data = response;
          this.dataSource = new MatTableDataSource<any>(this.data);
      },
      error => {
        this._snackBar.open('Failed to load favorites videos', 'Close', { duration: 3000 });
      }
    );
  }

  deleteFavorite(id: string) {
    this.favoriteVideoService.deleteFavoriteVideo({"id": id}).subscribe(
      (res: any) => {
        this._snackBar.open(res.response, 'Close', { duration: 3000 });
        this.fetchFavorites();
      },
      error => {
        this._snackBar.open('Failed to remove video from favorites', 'Close', { duration: 3000 });
      }
    );
  }
}
