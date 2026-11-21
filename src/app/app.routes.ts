import { Routes } from '@angular/router';
import { ContentLayout } from './layout/content-layout/content-layout';

export const routes: Routes = [
  {
    path: '',
    component: ContentLayout,
    children: [
        {
              path: '',
              loadComponent: () =>
                import('./features/home/pages/home-page/home-page').then((m) => m.HomePage),
            },
    ]
 },
];
