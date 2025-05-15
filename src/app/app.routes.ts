import { Routes } from '@angular/router';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { OurServicesComponent } from './core/our-services/our-services.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'order_services',
    component: OurServicesComponent,
  },
];
