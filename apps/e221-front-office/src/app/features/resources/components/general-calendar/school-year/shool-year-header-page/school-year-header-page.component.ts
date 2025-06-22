import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, InputComponent } from '@e221-front-office/shared-ui';

@Component({
  selector: 'app-school-year-header-page',
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: './school-year-header-page.component.html',
  styleUrl: './school-year-header-page.component.scss',
})
export default class SchoolYearHeaderPageComponent {}
