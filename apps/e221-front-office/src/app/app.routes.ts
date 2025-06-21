import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // Redirect empty path to '/sign-in'
  {path: '', pathMatch : 'full', redirectTo: 'on-boarding'},
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'on-boarding',
    loadChildren: () => import('./features/on-bording/on-boarding.routes').then(m => m.ON_BOARDING_ROUTES),
  },
];
