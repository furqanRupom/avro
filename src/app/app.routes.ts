import { Routes } from '@angular/router';
import { ContentLayout } from './layout/content-layout/content-layout';

export const routes: Routes = [
  {
    path: '',
    component: ContentLayout,
    loadChildren:() => import('./features/home/home.routes').then((m) => m.homeRoutes)
  },
  {
    path: "auth",
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes)
  }
];
