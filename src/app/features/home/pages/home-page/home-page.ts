import { Component } from '@angular/core';
import { HeroBanner } from '../../../../shared/components/hero-banner/hero-banner';

@Component({
  imports: [HeroBanner],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {}
