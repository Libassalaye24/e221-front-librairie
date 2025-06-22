import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SidebarComponent } from '@e221-front-office/shared-ui';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export default class DefaultLayoutComponent {
  // properties
  collapsed: WritableSignal<boolean> = signal<boolean>(false);

  // methods
  toggleSidebar() {
    this.collapsed.set(!this.collapsed());
  }
}
