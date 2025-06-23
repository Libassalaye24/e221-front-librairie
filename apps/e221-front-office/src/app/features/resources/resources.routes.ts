import { Route } from '@angular/router';
import { TabsLayoutComponent } from '../../shared/components/layouts/tabs-layout/tabs-layout.component';

export const RESOURCES_ROUTES: Route[] = [

  {path: '', pathMatch : 'full', redirectTo: 'general-calendar'},
  {
    path: '',
    component: TabsLayoutComponent,
    children: [
      {
        path: 'general-calendar',
        loadChildren: () => import('./views/general-calendar/general-calendar.routes').then(m => m.RESOURCES_GENERAL_CALENDAR_ROUTES)
      },
    ]
  }

];
