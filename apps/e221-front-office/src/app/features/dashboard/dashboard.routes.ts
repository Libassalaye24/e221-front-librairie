import { Route } from '@angular/router';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component')
  }
];
