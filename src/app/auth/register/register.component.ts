import { Component, OnInit } from '@angular/core';

// MATERIAL UI
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatDividerModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  usernameInputValue: any = '';
  passwordInputValue: any = '';
  passwordConfirmInputValue: any = '';

  isButtonRegisterDisable: boolean = true;

  constructor() {}

  ngOnInit() {
    console.log(this.isButtonRegisterDisable);
  }

  usernameInputEvent(event: any) {
    this.usernameInputValue = (event.target as HTMLInputElement)?.value;
    console.log(this.usernameInputValue);
    console.log(this.isButtonRegisterDisable);

    this.usernameInputValue != '' &&
    this.passwordInputValue.length >= 1 &&
    this.passwordConfirmInputValue.length >= 1
      ? (this.isButtonRegisterDisable = false)
      : (this.isButtonRegisterDisable = true);
  }

  passwordInputEvent(event: any) {
    this.passwordInputValue = (event.target as HTMLInputElement)?.value;
    console.log(this.passwordInputValue);
    console.log(this.isButtonRegisterDisable);

    this.passwordInputValue != '' &&
    this.usernameInputValue.length >= 1 &&
    this.passwordConfirmInputValue.length >= 1
      ? (this.isButtonRegisterDisable = false)
      : (this.isButtonRegisterDisable = true);
  }

  passwordConfirmInputEvent(event: any) {
    this.passwordConfirmInputValue = (event.target as HTMLInputElement)?.value;
    console.log(this.passwordConfirmInputValue);
    console.log(this.isButtonRegisterDisable);

    this.passwordConfirmInputValue != '' &&
    this.usernameInputValue.length >= 1 &&
    this.passwordInputValue.length >= 1
      ? (this.isButtonRegisterDisable = false)
      : (this.isButtonRegisterDisable = true);
  }
}
