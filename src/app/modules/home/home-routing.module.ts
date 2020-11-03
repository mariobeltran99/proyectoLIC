import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOutletLayoutComponent } from './home-outlet-layout/home-outlet-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { GetStartLayoutComponent } from './get-start-layout/get-start-layout.component';
import { AboutUsLayoutComponent } from './about-us-layout/about-us-layout.component';
import { ApplicationLayoutComponent } from './application-layout/application-layout.component';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeOutletLayoutComponent,
    children: [
      {
        path: '',
        component: HomeLayoutComponent
      },
      {
        path: 'start',
        component: GetStartLayoutComponent
      },
      {
        path: 'about',
        component: AboutUsLayoutComponent
      },
      {
        path: 'app',
        component: ApplicationLayoutComponent
      },
      {
        path: 'contact',
        component: ContactLayoutComponent
      },
      /* {
        path: 'test',
        component: FormRadioComponent
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
