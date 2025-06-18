import { Component, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../atoms/input/input.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolYearDropdownComponent } from '@e221-front-office/shared-ui';

@Component({
  selector: 'lib-navbar',
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    SchoolYearDropdownComponent,
  ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  toggleCollapseEvent: OutputEmitterRef<boolean> = output<boolean>();

  searchControl2: FormControl = new FormControl('');

  isCollapsed:WritableSignal<boolean> = signal<boolean>(false);

  toggleCollapse() {
    this.isCollapsed.set(!this.isCollapsed());
    this.toggleCollapseEvent.emit(this.isCollapsed());
  }
}
