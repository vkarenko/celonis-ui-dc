import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { ContentSmallComponent } from './content-small/content-small.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'content', pathMatch: 'full' },
      { path: 'content', component: ContentComponent },
      { path: 'content-small', component: ContentSmallComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
