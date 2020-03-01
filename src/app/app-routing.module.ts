import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'shared',
    loadChildren: () => import('./hostcomp/hostcomp.module').then(mod => mod.HostcompModule),
  },
  {
    path: '**',
    redirectTo: 'shared'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
