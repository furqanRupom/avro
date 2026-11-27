import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Auth } from '../../../../core/services/auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  imports: [MatCardModule,MatButtonModule,MatIconModule,MatProgressSpinnerModule],
  selector: 'app-profile-page',
  styleUrl: './profile-page.css',
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  private readonly auth = inject(Auth)
  private readonly destroyRef = inject(DestroyRef)

  protected readonly IsLoggingOut = signal(false)
  protected readonly user = this.auth.user

  protected logout(): void {
    this.IsLoggingOut.set(true)
    this.auth
      .logout()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          window.location.href = "/"
        }
      })
  }
}
