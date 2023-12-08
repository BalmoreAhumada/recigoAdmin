import { Routes } from '@angular/router';
import UsersComponent from './pages/users/users.component';
import LoginPageComponent from './pages/login-page/login-page.component';
import { AuthModule } from './pages/auth.module';


export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component'),

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/auth.module').then(m => m.AuthModule),
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];
