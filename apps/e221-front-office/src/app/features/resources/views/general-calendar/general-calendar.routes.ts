import { Route } from '@angular/router';

export const RESOURCES_GENERAL_CALENDAR_ROUTES: Route[] = [
  {
    path: 'school-year',
    loadComponent: () => import('./school-year-list/school-year-list.component')
  },
  {
    path: 'tracking-event',
    loadComponent: () => import('./tracking-event-list/tracking-event-list.component')
  },
  {path: '', pathMatch : 'full', redirectTo: 'school-year'},

];
