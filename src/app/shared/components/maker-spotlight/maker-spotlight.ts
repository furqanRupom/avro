import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  selector: 'app-maker-spotlight',
  styleUrl: './maker-spotlight.css',
  templateUrl: './maker-spotlight.html',
})
export class MakerSpotlight {}
