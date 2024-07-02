import { Component, OnInit } from '@angular/core';
import { InnovatubeService } from '../../innovatube.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VideoPlayerComponent } from './component/video-player/video-player.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  videos: any[] = [];
  searchQuery: string = '';

  constructor(
    private innovatubeService: InnovatubeService, 
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchVideos();
  }

  fetchVideos() {
    this.innovatubeService.getVideos(this.searchQuery ? this.searchQuery : undefined).subscribe(
      response => {
        this.videos = response;
      },
      error => {
        this._snackBar.open('Failed to load videos', 'Close', { duration: 3000 });
      }
    );
  }

  onSearch() {
    this.fetchVideos();
  }

  selectVideo(videoSelected: any): void {
    this.dialog.open(VideoPlayerComponent, {
      data: videoSelected,
      panelClass: 'custom-dialog-container'
    });
  }


}
