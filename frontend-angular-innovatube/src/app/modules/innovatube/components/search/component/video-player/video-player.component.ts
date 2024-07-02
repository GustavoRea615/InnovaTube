import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FavoriteVideoService } from '../../../../favorite-video.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SecurityService } from '../../../../../@security/components/security.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  sanitizedUrl: SafeResourceUrl = "";
  videoTitle: string = "";
  description: string = "";
  channelTitle: string = "";
  publishedAt: string = "";
  tags: string[] = [];
  isFavorite: boolean = false;

  constructor(
    private favoriteVideoService: FavoriteVideoService,
    private securityService: SecurityService,
    private sanitizer: DomSanitizer, 
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<VideoPlayerComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    console.log("this.sanitizedUrl", this.sanitizedUrl);
    console.log("this.data", this.data);
    this.sanitizedUrl = this.getSafeUrl(this.data.id);
    this.videoTitle = this.data.snippet.title;
    this.description = this.data.snippet.description;
    this.channelTitle = this.data.snippet.channelTitle;
    this.publishedAt = this.data.snippet.publishedAt;
    this.tags = this.data.snippet.tags;
  }

  getSafeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // getVideoDetails(videoId: string): void {
  //   const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${this.apiKey}`;
  //   this.http.get<any>(url).subscribe(data => {
  //     const snippet = data.items[0].snippet;
  //     this.videoTitle = snippet.title;
  //     this.channelTitle = snippet.channelTitle;
  //     this.publishedAt = snippet.publishedAt;
  //     this.tags = snippet.tags;
  //   });
  // }
  changeFavorite(videoId: any, titleVideo: any){
    console.log("videoId", videoId)
    console.log("titleVideo", titleVideo)
    
    console.log("isFavorite", this.isFavorite)
    
    if(!this.isFavorite){
      this.addToFavoriteVideos(videoId, titleVideo)
    }else{
      this.removeToFavoriteVideos(videoId)
    } 


  }

  addToFavoriteVideos(videoId: any, titleVideo: any){
    let token = this.securityService.getItemFromStorage("token");
    console.log("token", token);
    this.favoriteVideoService.addFavoriteVideo({"token": token, "videoTitle": titleVideo, "videoID": videoId}).subscribe((res: any) => {
      console.log("response",)
      this.isFavorite = !this.isFavorite;
      this._snackBar.open(res.response, 'Close', { duration: 3000 });
    },
      error => {
        console.log("error", error);
        this._snackBar.open('Failed To Add AT Favorites', 'Close', { duration: 3000 });
      }
    );
  }

  removeToFavoriteVideos(videoId: any){
    this.favoriteVideoService.addFavoriteVideo({"id": videoId}).subscribe((res: any) => {
      console.log("response",)
      this.isFavorite = !this.isFavorite;
      this._snackBar.open(res.response, 'Close', { duration: 3000 });
    },
      error => {
        console.log("error", error);
        this._snackBar.open('Remove From Favorites Failed', 'Close', { duration: 3000 });
      }
    );
  }
}
