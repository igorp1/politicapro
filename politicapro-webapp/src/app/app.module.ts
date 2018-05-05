import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { RoutingModule } from './routing/routing.module';
import { ComponentsModule } from './components/components.module';

import { PoliticaProMetricsApiService } from './service/politica-pro-metrics-api-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [HttpModule, PoliticaProMetricsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
