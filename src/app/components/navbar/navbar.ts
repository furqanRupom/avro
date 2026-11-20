import { Component, computed, signal } from '@angular/core';

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
  protected doubleCount = computed(() => this.count() * 2)
  protected onClick() {
    console.log("Redirecting to discount page.......")
    this.isDisabled = !this.isDisabled
    if (this.isDisabled) {
      this.msg = this.msg + " Your discount request is processing..."
    }
  }
  protected onIncrement() {
    this.count.update((value) => value + 1)
  }
  protected onDecrement() {
    this.count.update((value) => value - 1)
  }
  protected onReset() {
    this.count.set(0)
  }
}
