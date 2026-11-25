import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { User } from '../models/user.model';
import { catchError, Observable, of, tap } from 'rxjs';
import { RegisterRequest } from '../models/register-request.model';

@Service()
export class Auth {
  private readonly http = inject(HttpClient)

  private readonly user = signal<User | null>(null)

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
