import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  declarations: [CardComponent, CardItemComponent],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
