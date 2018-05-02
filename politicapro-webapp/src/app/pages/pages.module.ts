import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from '../routing/routing.module';

import { ComponentsModule } from '../components/components.module';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { TermometroComponent } from './termometro/termometro.component';
import { DevComponent } from './dev/dev.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule
  ],
  declarations: [HomePageComponent, AboutComponent, TermometroComponent, DevComponent]
})
export class PagesModule { }
