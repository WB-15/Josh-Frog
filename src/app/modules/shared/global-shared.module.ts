import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  exports: [ FontAwesomeModule ],
  imports: [
    CommonModule, FontAwesomeModule
  ]
})
export class GlobalSharedModule { }
