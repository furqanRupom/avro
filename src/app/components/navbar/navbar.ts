import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected msg = "Welcome to Avro. Hope you will see great experience here :)"
  protected isDisabled = false
  protected count = signal(0)

  protected onClick() {
    console.log("Redirecting to discount page.......")
    this.isDisabled = !this.isDisabled
    if (this.isDisabled) {
      this.msg = this.msg + " Your discount request is processing..."
    }
  }
  protected onIncrement() {

  }
  protected onDecrement() {

  }
}
