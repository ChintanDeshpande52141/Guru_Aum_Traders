import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { WhatWeSellComponent } from './what-we-sell/what-we-sell.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HeroSectionComponent,
    LandingPageComponent,
    OurServicesComponent,
    WhatWeSellComponent,
    OurStoryComponent,
    OurTeamComponent,
    TestimonialsComponent,
  ],
  exports: [
    HeroSectionComponent,
    LandingPageComponent,
    OurServicesComponent,
    WhatWeSellComponent,
    OurStoryComponent,
    OurTeamComponent,
    TestimonialsComponent,
  ],
})
export class CoreModule {}
