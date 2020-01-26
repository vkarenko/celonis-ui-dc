import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'layout-example', pathMatch: 'full' },
  {
    path: 'layout-example',
    loadChildren: () => import('./_modules/layout/layout.module').then(mod => mod.LayoutModule)
  },
  {
    path: 'ui-component',
    loadChildren: () => import('./_modules/card/card.module').then(mod => mod.CardModule)
  },
  {
    path: 'animation',
    loadChildren: () => import('./_modules/animation/animation.module').then(mod => mod.AnimationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
