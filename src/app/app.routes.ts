import { Routes } from '@angular/router';
import { ContentLayout } from './layout/content-layout/content-layout';

export const routes: Routes = [
  {
    path: '',
    component: ContentLayout,
    children: []
 },
];
