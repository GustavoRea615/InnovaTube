import { Component } from '@angular/core';
import { SecurityService } from './modules/@security/components/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular-innovatube';
  constructor(private securityService: SecurityService) { }

  isAuthenticated(): boolean {
    return this.securityService.isAuthenticated();
  }

}
