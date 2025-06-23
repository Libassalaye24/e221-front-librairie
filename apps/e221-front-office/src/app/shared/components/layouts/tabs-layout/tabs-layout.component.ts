import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from '../../../models/interfaces/resources.interface';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Logger } from '../../../services/logger/logger.service';
import { filter } from 'rxjs';
import { Tabs, TabsComponent } from '@e221-front-office/shared-ui';

@Component({
  selector: 'app-tabs-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TabsComponent],
  templateUrl: './tabs-layout.component.html',
  styleUrl: './tabs-layout.component.scss',
})
export class TabsLayoutComponent implements OnInit {
  // injections
  private readonly router: Router = inject(Router);
  private readonly logger: Logger = inject(Logger);

  // properties
  currentRoute: WritableSignal<string> = signal('');
  @Input() tabs: Tabs[] = [
    {
      id: 1,
      header: "",
      labelHeader: "Année Scolaire",
      icon: "",
      route: "/resources/general-calendar/school-year"
    },
    {
      id: 2,
      header: "",
      labelHeader: "Suivi des événements",
      route: "/resources/general-calendar/tracking-event"
    },
    {
      id: 2,
      header: "",
      labelHeader: "Calendrier Général",
      icon: "/resources/general-calendar"
    }
  ];

  // hooks
  ngOnInit(): void {
    this.currentRoute.set(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.urlAfterRedirects);
      });
  }

  // methods
  getActive(item: Tabs): 'active' | 'default' {
    if (!item.route) {
      return "default";
    }
    return this.currentRoute().startsWith(item.route!) ? 'active' : 'default';
  }

  onSelectTab(tab: Tabs) {
    console.log("Event tabs ", tab)
    // this.router.navigate([$event?.route]).then()
    if (tab.route) {
      this.router.navigate([tab.route]).then();
    } else {
      console.warn('Tab does not have a route:', tab);
    }

  }
}
