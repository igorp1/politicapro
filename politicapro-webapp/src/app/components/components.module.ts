import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { RoutingModule } from '../routing/routing.module';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { AddProComponent } from './add-pro/add-pro.component';
import { FooterComponent } from './footer/footer.component';
import { MentionCountGraphComponent } from './mention-count-graph/mention-count-graph.component';


@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ChartsModule
  ],
  declarations: [
    NavContainerComponent,
    AddProComponent,
    FooterComponent,
    MentionCountGraphComponent
  ],
  exports: [
    NavContainerComponent,
    AddProComponent,
    FooterComponent,
    MentionCountGraphComponent
  ]

})
export class ComponentsModule { }
