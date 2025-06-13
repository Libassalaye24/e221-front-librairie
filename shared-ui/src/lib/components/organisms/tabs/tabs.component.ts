import { Component, EventEmitter, Input, Output, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { Tabs } from '../../../models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-tabs-tabs',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input() tabs!: Tabs[];
  @Input() custom = false;
  @Input() showId!: boolean;
  @Output() selectedTab: EventEmitter<Tabs> = new EventEmitter();

  @ViewChildren('containerTemplates', { read: ViewContainerRef })
  containerTemplates!: QueryList<ViewContainerRef>;

  activeIndex = 0;

  isTabActive(index: number): boolean {
    return this.activeIndex === index;
  }

  returnSelectedTab(index: number, data: Tabs) {
    this.activeIndex = index;
    this.selectedTab.emit(data);
  }
}
