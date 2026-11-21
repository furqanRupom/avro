import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  imports: [RouterLink,MatIconModule],
  selector: 'app-hero-banner',
  styleUrl: './hero-banner.css',
  templateUrl: './hero-banner.html',
})
export class HeroBanner {}
