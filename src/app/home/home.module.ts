import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexHomeComponent } from './index-home/index-home.component';



@NgModule({
  declarations: [IndexHomeComponent],
  imports: [
    CommonModule
  ],
  exports:[IndexHomeComponent]
})
export class HomeModule { }
