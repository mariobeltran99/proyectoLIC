import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderSvgComponent } from './components/render-svg/render-svg.component';
import { ProgressBarNavigationComponent } from './components/progress-bar-navigation/progress-bar-navigation.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const components = [
  RenderSvgComponent,
  ProgressBarNavigationComponent
];

const materialImports = [
  MatProgressBarModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ...materialImports,
    ReactiveComponentModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
