import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'layout-example', pathMatch: 'full' },
  {
    path: 'layout-example',
    loadChildren: () => import('./_modules/layout/layout.module').then(mod => mod.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
