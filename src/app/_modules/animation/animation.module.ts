import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationComponent } from './animation.component';
import { SpeedometerComponent } from './speedometer/speedometer.component';
import { OdometerComponent } from './odometer/odometer.component';
import { DigitComponent } from './odometer/digit/digit.component';


@NgModule({
  declarations: [AnimationComponent, SpeedometerComponent, OdometerComponent, DigitComponent],
  imports: [
    CommonModule,
    AnimationRoutingModule
  ]
})
export class AnimationModule { }
