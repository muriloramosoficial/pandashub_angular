import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './auth/session/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecoveryComponent } from './auth/recovery/recovery.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'dashboard', component: DashboardComponent },
];
