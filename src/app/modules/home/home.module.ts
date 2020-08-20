import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { GetStartLayoutComponent } from './get-start-layout/get-start-layout.component';
import { HomeOutletLayoutComponent } from './home-outlet-layout/home-outlet-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { AboutUsLayoutComponent } from './about-us-layout/about-us-layout.component';

const components = [
  HomeLayoutComponent,
  GetStartLayoutComponent,
  HomeOutletLayoutComponent,
  AboutUsLayoutComponent
];

const materialImports = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatDividerModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...materialImports,
    SharedModule
  ]
})
export class HomeModule { }
