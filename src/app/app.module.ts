import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseRoutingModule } from './router/base-routing.module';
import {RouterModule} from "@angular/router";
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
  declarations: [AppComponent, PartnersComponent],
  imports: [BrowserModule, BaseRoutingModule,  RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PartnersComponent
  ],
})
export class AppModule {}
