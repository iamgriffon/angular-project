import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';



@NgModule({
  declarations: [SecondComponentComponent, ThirdComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[SecondComponentComponent]
})
export class FirstModuleModule { }
