import { Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  // interpolation in Angular
  protected msg = "Welcome to Avro. Hope you will see great experience here :)"
  protected isDisabled = false

  // using states or workers signals
  protected count = signal(0)

  // using computed signals
  protected doubleCount = computed(() => this.count() * 2)

  // using effect signals
  private readonly countLog = effect(() => {
    console.log("Counting values :",this.count())
  })

  // methods
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
