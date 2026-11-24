import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: "login",
    title: "login",
    loadComponent: () => import('./pages/login-page/login-page').then((m) => m.LoginPage)
  }
]
