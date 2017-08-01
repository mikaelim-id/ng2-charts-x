import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseChartDirective } from './charts/charts.directive';
export * from './charts/charts.directive';

@NgModule({
  declarations: [
    BaseChartDirective
  ],
  exports: [
    BaseChartDirective
  ]
})
export class ChartModule {
}
