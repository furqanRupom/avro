import { Routes } from "@angular/router";
import { authGuard } from "../../core/guards/auth-guard";

export const profileRoutes: Routes = [
  {
    path: "",
    title: "My Profile",
    canMatch:[authGuard],
    loadComponent: () => import('./pages/profile-page/profile-page').then((m) => m.ProfilePage)
  }
]
