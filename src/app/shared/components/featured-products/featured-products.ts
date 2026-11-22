import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  imports: [RouterLink,MatCardModule,MatButtonModule,MatIconModule,MatChipsModule],
  selector: 'app-featured-products',
  styleUrl: './featured-products.css',
  templateUrl: './featured-products.html',
})
export class FeaturedProducts {}
