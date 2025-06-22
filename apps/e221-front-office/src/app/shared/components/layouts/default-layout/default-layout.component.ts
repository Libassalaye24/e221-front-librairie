import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, NavbarComponent, SidebarComponent } from '@e221-front-office/shared-ui';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export default class DefaultLayoutComponent {
  // injections
  private readonly router: Router = inject(Router);

  // properties
  collapsed: WritableSignal<boolean> = signal<boolean>(false);

  // methods
  toggleSidebar() {
    this.collapsed.set(!this.collapsed());
  }

  onMenuClicked($event: MenuItem) {
      this.router.navigate([$event.route]).then()
  }
}

