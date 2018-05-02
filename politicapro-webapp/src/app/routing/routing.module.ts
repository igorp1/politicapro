import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { TermometroComponent } from '../pages/termometro/termometro.component';
import { DevComponent } from '../pages/dev/dev.component';
import { AboutComponent } from '../pages/about/about.component';

export const ROUTES: Routes = [
  { path: '', component: HomePageComponent, },
  { path: 'about', component: AboutComponent, },
  { path: 'termometro', component: TermometroComponent, },
  { path: 'devs', component: DevComponent, },
  { path: '**', redirectTo : '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [],
  exports: [RouterModule]

})
export class RoutingModule { }
