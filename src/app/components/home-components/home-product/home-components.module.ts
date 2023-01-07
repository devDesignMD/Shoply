import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import {PartnersComponent} from "../partners/partners.component";
import { HomeProductComponent } from '../home-product.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { HomeFeedbackComponent } from '../home-feedback/home-feedback.component';
import {ProductComponentsModule} from "../../product-components/product-components.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ HeroComponent,PartnersComponent, HomeProductComponent, BenefitsComponent, HomeFeedbackComponent],
    imports: [CommonModule, ProductComponentsModule, RouterModule],
  exports: [ HeroComponent, PartnersComponent, HomeProductComponent, BenefitsComponent, HomeFeedbackComponent],
})
export class HomeComponentsModule {}
