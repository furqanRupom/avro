import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [RouterLink,MatCardModule,MatButtonModule,MatIconModule],
  selector: 'app-featured-products',
  styleUrl: './featured-products.css',
  templateUrl: './featured-products.html',
})
export class FeaturedProducts {}
