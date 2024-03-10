import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL UI
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css'],
})
export class RecoveryComponent implements OnInit {
  emailInputValue: any = '';

  isButtonRecoveryDisable: boolean = true;

  constructor() {}

  ngOnInit() {}

  emailInputEvent(event: any) {
    this.emailInputValue = (event.target as HTMLInputElement)?.value;

    this.emailInputValue != '' && this.emailInputValue.length >= 1
      ? (this.isButtonRecoveryDisable = false)
      : (this.isButtonRecoveryDisable = true);
  }
}
