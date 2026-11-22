import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,RouterLink,ReactiveFormsModule],
  selector: 'app-login-page',
  styleUrl: './login-page.css',
  templateUrl: './login-page.html',
})
export class LoginPage {
 private readonly fb = inject(FormBuilder)

  loginForm = this.fb.group(({
    email: ['', Validators.required, Validators.email],
    password:['',Validators.required]
  }))
}
