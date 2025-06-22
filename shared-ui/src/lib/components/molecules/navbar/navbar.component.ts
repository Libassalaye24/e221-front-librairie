import { Component, inject, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../atoms/input/input.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolYearDropdownComponent } from '@e221-front-office/shared-ui';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-navbar',
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    SchoolYearDropdownComponent,
    Menu,
  ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  // injections
  private readonly router: Router = inject(Router);

  // properties
  toggleCollapseEvent: OutputEmitterRef<boolean> = output<boolean>();
  searchControl2: FormControl = new FormControl('');
  isCollapsed: WritableSignal<boolean> = signal<boolean>(false);
  items: MenuItem[] = [
    {
      label: 'Settings',
      icon: 'pi pi-cog'
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: (): void => {
        this.router.navigate(['/auth/sign-in']).then();
      }
    }
  ];

  toggleCollapse() {
    this.isCollapsed.set(!this.isCollapsed());
    this.toggleCollapseEvent.emit(this.isCollapsed());
  }
}
