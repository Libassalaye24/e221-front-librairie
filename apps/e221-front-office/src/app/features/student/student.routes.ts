import { Route } from '@angular/router';

export const STUDENT_ROUTES: Route[] = [
  {
    path: 'add',
    loadComponent: () => import('./views/register/register.component')
  },
  {
    path: 'list',
    loadComponent: () => import('./views/registration-list/registration-list.component')
  }
];
