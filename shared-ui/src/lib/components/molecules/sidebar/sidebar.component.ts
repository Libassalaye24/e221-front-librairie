import { Component, effect, EventEmitter, input, Input, InputSignal, OnInit, Output } from '@angular/core';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';

export interface MenuItem {
  icon: string;
  label: string;
  active: boolean;
  route: string;
  hasNotification?: boolean;
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
}

export interface ActionItem {
  code: string;
  text: string;
  bgColor: string;
  borderColor: string;
}
@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrl: './sidebar.component.scss',
  imports: [
    NgClass,
    NgForOf,
    NgIf,
    CommonModule,
  ]
})
export class SidebarComponent implements OnInit{
  isAdmin = true;
  isCollapsed = false;
  isCollapsed2: InputSignal<boolean> = input(false);

  options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];
  @Input() logoUrl: string = 'assets/images/logo.png';
  @Input() title: string = 'Seydina Mouhammad Diop';
  @Input() subtitle: string = '105 82 15';

  @Input() expandedSections: Set<string> = new Set([
    'MENU PRINCIPAL',
    'MON ÉCOLE',
    'PÉDAGOGIE',
    'AUTRES',
  ]);

  @Input() menuItems: MenuSection[] = [
    {
      section: '',
      items: [
        {
          icon: 'pi-th-large',
          label: 'Dashboard',
          active: true,
          route: '/home',
        },
        {
          icon: 'pi-calendar',
          label: 'Planning',
          active: false,
          hasNotification: false,
          route: '/calendar',
        },
        {
          icon: 'pi-folder',
          label: 'Classes',
          active: false,
          hasNotification: true,
          route: '/home',
        },
        {
          icon: 'pi-pencil',
          label: 'Emargement professeur',
          active: false,
          hasNotification: false,
          route: '/home',
        },
        {
          icon: 'pi-tablet',
          label: 'Absences / Justifications',
          active: false,
          hasNotification: false,
          route: '/home',
        },
        {
          icon: 'pi-th-large',
          label: 'Notes / Réclamations',
          active: false,
          hasNotification: false,
          route: '/notes',
        },
        {
          icon: 'pi-calendar-plus',
          label: 'Evénements',
          active: false,
          hasNotification: false,
          route: '/events',
        },
        {
          icon: 'pi-file-edit',
          label: 'Inscriptions / Réinscriptions',
          active: false,
          hasNotification: false,
          route: '/enrolment/list',
        },
        {
          icon: 'pi-building',
          label: 'Bibliothèque',
          active: false,
          hasNotification: false,
          route: '/home',
        },
      ],
    },
  ];
  @Output() collapseToggled = new EventEmitter<boolean>();
  @Output() menuItemClicked = new EventEmitter<any>();


  constructor() {
    effect(() => {
      this.isCollapsed = this.isCollapsed2();
    });
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapseToggled.emit(this.isCollapsed);
  }

  toggleSection(sectionName: string): void {
    if (this.expandedSections.has(sectionName)) {
      this.expandedSections.delete(sectionName);
    } else {
      this.expandedSections.add(sectionName);
    }
  }

  handleMenuClick(event: Event, item: MenuItem) {
    event.preventDefault(); // Empêche le href de rediriger
  }

  onMenuItemClick(item: MenuItem) {
    // Réinitialise tous les items
    this.menuItems.forEach(section => {
      section.items.forEach(i => i.active = false);
    });

    // Active l’item cliqué
    item.active = true;
    this.menuItemClicked.emit(item);
  }

  ngOnInit(): void {
    this.setCollapseBasedOnScreen();
    this.eventScreenSizeListener();
  }

  private setCollapseBasedOnScreen() {
    this.isCollapsed = window.innerWidth <= 768;
  }


  private eventScreenSizeListener() {
    window.addEventListener('resize', () => this.setCollapseBasedOnScreen());
  }
}
