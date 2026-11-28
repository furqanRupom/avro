import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../../core/services/auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

interface NavLink {
  label: string;
  path: string;
  exact?: boolean;
}

interface AccountLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatIconModule,MatDividerModule,MatMenuModule,MatDividerModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly auth = inject(Auth)
  protected readonly user = this.auth.user

  private readonly destroyRef = inject(DestroyRef)

  protected readonly IsLoggingOut = signal(false)
  protected readonly navLinks: NavLink[] = [
     { label: 'Home', path: '/', exact: true },
     { label: 'Products', path: '/products' },
     { label: 'Categories', path: '/categories' },
     { label: 'About Us', path: '/about' },
   ];

   protected readonly accountLinks: AccountLink[] = [
     { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
     { label: 'My profile', path: '/profile', icon: 'person' },
     { label: 'My orders', path: '/orders', icon: 'receipt_long' },
     { label: 'Wishlist', path: '/wishlist', icon: 'favorite_border' },
   ];

  protected logout(): void {
    this.IsLoggingOut.set(true)
    this.auth
      .logout()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          window.location.href = "/auth/login"
        }
      })
  }
}
