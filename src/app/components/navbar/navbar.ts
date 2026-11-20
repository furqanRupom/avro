import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected msg = "Welcome to Avro. Hope you will see great experience here :)"
  protected isDisabled = false
}
