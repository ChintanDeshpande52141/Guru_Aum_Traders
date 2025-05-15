import { Component } from '@angular/core';
import { CoreModule } from '../core.module';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
