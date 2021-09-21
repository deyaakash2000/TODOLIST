import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LogGuard } from './core/log.guard';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'',component:LoginComponent,canActivate:[LogGuard]},
  {path:'update/:id',component:UpdateComponent,canActivate:[AuthGuard]},
  {path:'delete/:id',component:DeleteComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
