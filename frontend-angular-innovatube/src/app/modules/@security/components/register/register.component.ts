import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  securityQuestion: string = '';
  securityAnswer: string = '';

  formGroup: FormGroup;

  constructor(
    private securityService: SecurityService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.formGroup = new FormGroup({});
    this.formGroup.addControl('name',
      new FormControl('',
        [
          Validators.required,
        ]));
    this.formGroup.addControl('lastname',
      new FormControl('',
        [
          Validators.required,
        ]));
    this.formGroup.addControl('username',
      new FormControl('',
        [
          Validators.required,
          Validators.maxLength(50),
        ]));
    this.formGroup.addControl('email',
      new FormControl('',
        [
          Validators.required,
        ]));

    this.formGroup.addControl('password',
      new FormControl('',
        [
          Validators.required,
          Validators.maxLength(16),
        ]));
    this.formGroup.addControl('securityQuestion',
      new FormControl('',
        [
          Validators.required,
        ]));
    this.formGroup.addControl('securityAnswer',
      new FormControl('',
        [
          Validators.required,
        ]));
  }

  register() {
    let userObj = {
      name: this.name,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password,
      securityQuestion: this.securityQuestion,
      securityAnswer: this.securityAnswer
    }
    this.securityService.register(userObj).subscribe((res: any) => {
      console.log("response",)
      this._snackBar.open(res.response, 'Close', { duration: 3000 });
      this.router.navigate(['/login']);
    },
      error => {
        console.log("error", error);
        this._snackBar.open('Registration failed', 'Close', { duration: 3000 });
      }
    );
  }

  ngOnInit(): void {
  }

}
