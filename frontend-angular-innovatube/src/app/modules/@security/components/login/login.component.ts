import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalUtils } from '../../../@core/global-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formGroup: FormGroup;
  loading = false;

  showMessages: any = {};

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  usernameOrEmail: string = '';
  password: string = '';

  constructor(
    private securityService: SecurityService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    // if (authService.isAuthenticated()) {
    //   this.securityService.redirectToLoggedPrincipal();
    // }

    this.formGroup = new FormGroup({});
    this.formGroup.addControl('usernameOrEmail',
      new FormControl('',
        [
          Validators.required,
          Validators.maxLength(50),
        ]));

    this.formGroup.addControl('password',
      new FormControl('',
        [
          Validators.required,
          Validators.maxLength(16),
        ]));

  }

  ngOnInit(): void {
  }

  isInvalid(name: string): boolean {
    if (this.formGroup.controls[name]) { }
    return (this.formGroup.controls[name].pristine || this.formGroup.controls[name].dirty) &&
      this.formGroup.controls[name].touched &&
      this.formGroup.controls[name].invalid;
  }
  controlHasError(control: string, error: string): boolean {
    return GlobalUtils.validateUndefinedOrNull(this.formGroup.controls[control].errors) == false;
  }

  login(): void {
    this.user = {
      usernameOrEmail: this.usernameOrEmail, 
      password: this.password
    }
    console.log("this.user", this.user);
    this.loading = true;
    this.securityService.login(this.user).subscribe(
      res => {
        this.loading = false;
        localStorage.setItem('token', res.token);
        localStorage.setItem('isAuthenticated', "true");
        this._snackBar.open(res.status, 'Close', { duration: 3000 });
        this.router.navigate(['search']);
        // this.securityService.redirectToLoggedPrincipal();
      },
      error => {
        this.loading = false;
        localStorage.setItem('isAuthenticated', "false");
        console.log("error", error)
        this._snackBar.open(error.error.response, 'Close', { duration: 3000 });
      }
    );
  }

}