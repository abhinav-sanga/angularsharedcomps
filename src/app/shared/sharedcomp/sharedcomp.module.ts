import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedcompComponent } from './sharedcomp.component';

@NgModule({
  declarations: [SharedcompComponent],
  imports: [
    CommonModule
  ],
  // in order to share this component to another module, we need to add it in the exports
  exports: [SharedcompComponent]
})
export class SharedcompModule { }
