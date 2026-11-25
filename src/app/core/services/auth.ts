import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { User } from '../models/user.model';
import { catchError, Observable, of, tap } from 'rxjs';
import { RegisterRequest } from '../models/register-request.model';
import { ROLES } from '../../features/auth/role.model';

@Service()
export class Auth {
  private readonly http = inject(HttpClient)

  public readonly user = signal<User | null>(null)
  public readonly isAuthenticated = computed<boolean>(() => this.user === null)
  public readonly isCustomer = computed<boolean>(() => this.user()?.role == ROLES.CUSTOMER)
  public readonly isAdmin = computed<boolean>(() => this.user()?.role == ROLES.ADMIN)

  // GET : auth/me - fetched authenticated  User Info API
  public init(): Observable<User | null> {
    return this.http.get<User>("/auth/me").pipe(
      tap((user) => {
        this.user.set(user)
      }),
      catchError(() => {
        this.user.set(null);
        return of(null);
      })
    )
  }

  // POST: User Registration
  public register(payload: RegisterRequest): Observable<User>{
    return this.http
      .post<User>("/auth/register", payload)
      .pipe(tap((user) => this.user.set(user)));
  }

  // POST: User Login
  public login(email: string, password: string) : Observable<User>{
    return this.http
      .post<User>("/auth/login",{email,password})
      .pipe(tap((user) => this.user.set(user)))

  }

  // POST: User Logout
  public logout() : Observable<void> {
    return this.http
      .post<void>("/auth/logout",{})
  }
}
