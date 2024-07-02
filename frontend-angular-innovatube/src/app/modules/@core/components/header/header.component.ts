import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../../@security/components/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  isAuthenticated: any = "false";
  showHeader: boolean = true;
  constructor(
    private securityService: SecurityService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
  }

  logout(){
    this.securityService.logout();
  }

}
