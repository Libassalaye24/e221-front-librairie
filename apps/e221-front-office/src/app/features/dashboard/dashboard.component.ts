import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import SemesterLayoutComponent from '../../shared/components/layouts/semester-layout/semester-layout.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SemesterLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export default class DashboardComponent {}
