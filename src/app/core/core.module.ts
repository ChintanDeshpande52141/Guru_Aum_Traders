import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HeroSectionComponent,
    LandingPageComponent,
    OurServicesComponent,
  ],
  exports: [HeroSectionComponent, LandingPageComponent, OurServicesComponent],
})
export class CoreModule {}
