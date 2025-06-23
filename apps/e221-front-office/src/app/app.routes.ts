import { Route } from '@angular/router';
import DefaultLayoutComponent from './shared/components/layouts/default-layout/default-layout.component';
import { ResourcesLayoutComponent } from './shared/components/layouts/resources-layout/resources-layout.component';

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


  {
    path: '',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // resolve: {
    //   initialData: initialDataResolver
    // },
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
      },
      {
        path: 'enrolment',
        loadChildren: () => import('./features/student/student.routes').then(m => m.STUDENT_ROUTES),
      },
      {
        path: "resources",
        component: ResourcesLayoutComponent,
        loadChildren: () => import('./features/resources/resources.routes').then(m => m.RESOURCES_ROUTES)
      }
    ]
  }
];
