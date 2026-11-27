import { Routes } from "@angular/router";
import { authGuard } from "../../core/guards/auth-guard";

export const homeRoutes: Routes = [
  {
    path: "",
    title: "home",
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage)
  },
  {
    path: "profile",
    title: "My Profile",
    canMatch:[authGuard],
    loadComponent: () => import('./pages/profile-page/profile-page').then((m) => m.ProfilePage)
  }
]
