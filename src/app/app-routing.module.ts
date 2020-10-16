import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { IndexHomeComponent } from './home/index-home/index-home.component';
import { IndexLoginComponent } from './login/index-login/index-login.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:'home', component:IndexHomeComponent, canActivate:[AuthGuard]
  },
  {
    path:'login', component:IndexLoginComponent,
  },
  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
