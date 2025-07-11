import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.component')
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.component')
  }
];
