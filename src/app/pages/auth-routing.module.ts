import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import UsersComponent from './users/users.component';
import DashboardComponent from './dashboard/dashboard.component';

// localhost:4200/auth/
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'users', component: UsersComponent},
      { path: '**', redirectTo: '' },
    ]
  }
];




@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
})
export class AuthRoutingModule { }
