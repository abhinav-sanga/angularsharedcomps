import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostcompComponent } from './hostcomp.component';
import { HostcompRouting } from './hostcomp-routing.module';

// import the module that is to be shared in this module
import { SharedcompModule } from '../shared/sharedcomp/sharedcomp.module';

@NgModule({
  declarations: [HostcompComponent],
  imports: [
    CommonModule,
    // add it in the imports
    SharedcompModule,
    HostcompRouting
  ],
  exports: [HostcompComponent]
})
export class HostcompModule { }
