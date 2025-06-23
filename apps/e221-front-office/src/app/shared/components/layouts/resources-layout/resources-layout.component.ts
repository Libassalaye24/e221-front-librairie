import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesCardComponent } from '@e221-front-office/shared-ui';
import { Resource } from '../../../models/interfaces/resources.interface';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Logger } from '../../../services/logger/logger.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-resources-layout',
  standalone: true,
  imports: [CommonModule, ResourcesCardComponent, RouterOutlet],
  templateUrl: './resources-layout.component.html',
  styleUrl: './resources-layout.component.scss',
})
export class ResourcesLayoutComponent implements OnInit {
  // injections
  private readonly router: Router = inject(Router);
  private readonly logger: Logger = inject(Logger);

  // properties
  resourcesList: WritableSignal<Resource[]> = signal<Resource[]>([
    {
      id: 1,
      status: true,
      label: 'Année & Calendrier général',
      rightIcon: 'pi pi-ellipsis-v',
      leftIcon: 'pi pi-folder-open',
      route: '/resources/general-calendar',
    },
    {
      id: 2,
      status: true,
      label: 'Domaines & Spécialités',
      rightIcon: 'pi pi-ellipsis-v',
      leftIcon: 'pi pi-folder-open',
      route: '/resources/domains-specialities',
    },
    {
      id: 3,
      status: true,
      label: 'Classes & Sous-classes',
      rightIcon: 'pi pi-ellipsis-v',
      leftIcon: 'pi pi-folder-open',
      route: '/resources/classes-subclasses',
    },
    {
      id: 4,
      status: true,
      label: 'UE & Modules',
      rightIcon: 'pi pi-ellipsis-v',
      leftIcon: 'pi pi-folder-open',
      route: '/resources/ue-modules',
    },{
      id: 5,
      status: true,
      label: 'Paramètres',
      rightIcon: 'pi pi-ellipsis-v',
      leftIcon: 'pi pi-folder-open',
      route: '/resources/settings',
    },

  ]);
  currentRoute: WritableSignal<string> = signal('');


  // hooks
  ngOnInit(): void {
    this.currentRoute.set(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.urlAfterRedirects);
      });
  }

  // methods
  getActive(item: Resource): 'active' | 'default' {
    return this.currentRoute().startsWith(item.route) ? 'active' : 'default';
  }
}
