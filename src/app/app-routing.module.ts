import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { JantriListComponent } from './jantri-list/jantri-list.component';
 import { JantriListComponent } from './jantri/jantri-list/jantri-list.component';
import { UserJantriComponent } from './jantri/user-jantri/user-jantri.component';
import { LoginComponent } from './Login/login/login.component';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { RoleListComponent } from './Role/role-list/role-list.component';
import { AuthService } from './services/auth.service';
import { ShiftListComponent } from './Shift/shift-list/shift-list.component';
import { TimerComponent } from './timer/timer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserListComponent } from './User/user-list/user-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
 
  {
    path: 'shift',
    component: ShiftListComponent,    

  },
  { path: 'login', component: LoginComponent },
  { path: 'time', component: TimerComponent },
  { path: 'user', component: UserListComponent, },
  { path: 'menu', component: MenuListComponent },
  { path: 'role', component: RoleListComponent },
  { path: 'jantri', component: JantriListComponent },
  { path: 'rolepermission', component: RolePermissionComponent },
  { path: 'userjantri', component: UserJantriComponent },
  { path: 'transaction', component: TransactionComponent },


  
  // { path: 'role', component: RoleListComponent,canActivate: [AuthService]  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
