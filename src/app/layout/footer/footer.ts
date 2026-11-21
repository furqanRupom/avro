import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  imports: [RouterLink,RouterLinkActive,MatIconModule],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
currentYear = new Date().getFullYear();
}
