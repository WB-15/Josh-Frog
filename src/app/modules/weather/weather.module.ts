import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './pages/weather/weather.component';
import { GlobalSharedModule } from '../shared/global-shared.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    GlobalSharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WeatherModule {}
