import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContentComponent } from './content/content.component';
import { ContentSmallComponent } from './content-small/content-small.component';
import { LayoutComponent } from './layout.component';
import { ContentSectionComponent } from './content-section/content-section.component';


@NgModule({
  declarations: [ContentComponent, ContentSmallComponent, LayoutComponent, ContentSectionComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
