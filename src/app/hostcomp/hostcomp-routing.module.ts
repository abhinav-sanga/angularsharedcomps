import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostcompComponent } from './hostcomp.component';

const routes: Routes = [
    {
        path: '',
        component: HostcompComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostcompRouting { }
