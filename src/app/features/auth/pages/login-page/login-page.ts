import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {form,FormField,required,email,FormRoot} from "@angular/forms/signals"
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { firstValueFrom } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
@Component({
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatButtonModule,MatCardModule,RouterLink,MatProgressSpinnerModule,FormField,FormRoot],
  selector: 'app-login-page',
  styleUrl: './login-page.css',
  templateUrl: './login-page.html',
})
export class LoginPage {
  private readonly auth = inject(Auth)
  private readonly router = inject(Router)


  protected readonly model = signal({ email: "", password: "" })

  protected readonly showPassword = signal(false)
  protected readonly currentYear = new Date().getFullYear();

  protected readonly loginForm = form(
    this.model,
    (schema) => {
      required(schema.email, { message: "Email is required" });
      email(schema.email, { message: "Enter a valid email" });
      required(schema.password, { message: "Password is required" });
    },
    {
      submission: {
        action: async (formRef) => {
          const { email, password } = formRef().value()
          try {
            await firstValueFrom(this.auth.login(email, password))
            void this.router.navigate(['/'])
          } catch  {
            return {kind : "serverError", message:"Invalid credentials"}
          }
          return null
        }
      }
    }
  )

}
