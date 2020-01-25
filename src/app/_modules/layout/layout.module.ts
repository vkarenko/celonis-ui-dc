import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContentComponent } from './content/content.component';
import { ContentSmallComponent } from './content-small/content-small.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [ContentComponent, ContentSmallComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
