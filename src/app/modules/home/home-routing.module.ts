import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOutletLayoutComponent } from './home-outlet-layout/home-outlet-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { GetStartLayoutComponent } from './get-start-layout/get-start-layout.component';
import { AboutUsLayoutComponent } from './about-us-layout/about-us-layout.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
