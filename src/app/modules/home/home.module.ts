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
import { MatSidenavModule } from '@angular/material/sidenav';
import { ApplicationLayoutComponent } from './application-layout/application-layout.component';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';
import { CreatorsComponent } from './creators/creators.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { FormTextComponent } from './form-text/form-text.component';
import { FormNumberComponent } from './form-number/form-number.component';
import { FormRadioComponent } from './form-radio/form-radio.component';

const components = [
  HomeLayoutComponent,
  GetStartLayoutComponent,
  HomeOutletLayoutComponent,
  AboutUsLayoutComponent,
  ContactLayoutComponent,
  ApplicationLayoutComponent,
  CreatorsComponent,
  FormTextComponent,
  FormNumberComponent,
  FormRadioComponent,
];

const materialImports = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatDividerModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatChipsModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    ...components,
    ApplicationLayoutComponent,
    ContactLayoutComponent,
    CreatorsComponent,
    FormTextComponent,
    FormNumberComponent,
    FormRadioComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...materialImports,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class HomeModule { }
