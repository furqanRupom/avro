import { Component } from '@angular/core';
import { HeroBanner } from '../../../../shared/components/hero-banner/hero-banner';
import { WhyChooseUs } from '../../../../shared/components/why-choose-us/why-choose-us';
import { MakerSpotlight } from '../../../../shared/components/maker-spotlight/maker-spotlight';
import { FeaturedProducts } from '../../../../shared/components/featured-products/featured-products';

@Component({
  imports: [HeroBanner,FeaturedProducts,WhyChooseUs,MakerSpotlight],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {}
