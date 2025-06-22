import {
  Component,
  ContentChild,
  EventEmitter, inject,
  Input, OnInit,
  Output,
  QueryList, TemplateRef,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { Tabs } from '../../../models';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'lib-tabs-tabs',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnInit {
  // injections
  private readonly router: Router = inject(Router);

  @Input() tabs!: Tabs[];
  @Input() custom = false;
  @Input() showId!: boolean;
  @Output() selectedTab: EventEmitter<Tabs> = new EventEmitter();

  @ContentChild('containerTemplates', { static: false })
  containerTemplateRef!: TemplateRef<any>;

  activeIndex = 1;

  isTabActive(index: number): boolean {
    return this.activeIndex === index;
  }

  returnSelectedTab(index: number, data: Tabs) {
    this.activeIndex = index;
    this.selectedTab.emit(data);
  }

  ngOnInit() {
    // Set active tab initially
    this.setActiveTabByRoute(this.router.url);

    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveTabByRoute(event.urlAfterRedirects);
      });
  }

  setActiveTabByRoute(currentUrl: string): void {
    const foundIndex = this.tabs.findIndex(tab => currentUrl.startsWith(tab.route || ''));
    if (foundIndex !== -1) {
      this.activeIndex = foundIndex;
    }
  }
}
