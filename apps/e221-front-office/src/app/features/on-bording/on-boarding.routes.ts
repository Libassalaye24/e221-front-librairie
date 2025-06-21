import { Route } from '@angular/router';

export const ON_BOARDING_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./on-boarding.component')
  }
];
