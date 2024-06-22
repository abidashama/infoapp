import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityComponent } from './university.component';

@NgModule({
  declarations: [UniversityComponent],
  imports: [
    CommonModule
  ],
  exports: [UniversityComponent]
})
export class UniversityModule { }
