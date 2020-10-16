import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexLoginComponent } from './index-login/index-login.component';



@NgModule({
  declarations: [IndexLoginComponent],
  imports: [
    CommonModule
  ],
  exports:[IndexLoginComponent]
})
export class LoginModule { }
