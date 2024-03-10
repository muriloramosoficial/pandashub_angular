import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

// MATERIAL UI
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginFailedComponent } from './messages/login-failed/login-failed.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatDividerModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userAdmin = 'admin';
  passAdmin = '123';

  isButtonLoginDisable: boolean = true;

  usernameInputValue: any = '';
  passwordInputValue: any = '';
  durationInSeconds: number = 5;

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    console.log(this.usernameInputValue);
    console.log(this.passwordInputValue);
  }

  openSnackBar() {
    this._snackBar.openFromComponent(LoginFailedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  authValidation() {
    this.usernameInputValue == this.userAdmin &&
    this.passwordInputValue == this.passAdmin
      ? this.router.navigate(['/dashboard'])
      : this.openSnackBar();
  }

  usernameInputEvent(event: any) {
    this.usernameInputValue = (event.target as HTMLInputElement)?.value;

    this.usernameInputValue != '' && this.passwordInputValue.length >= 1
      ? (this.isButtonLoginDisable = false)
      : (this.isButtonLoginDisable = true);
  }

  passwordInputEvent(event: any) {
    this.passwordInputValue = (event.target as HTMLInputElement)?.value;

    this.usernameInputValue != '' && this.passwordInputValue.length >= 1
      ? (this.isButtonLoginDisable = false)
      : (this.isButtonLoginDisable = true);
  }
}
