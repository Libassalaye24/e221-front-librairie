import { Component, Input, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '@e221-front-office/shared-ui';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-semester-layout',
  standalone: true,
  imports: [CommonModule, SelectComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './semester-layout.component.html',
  styleUrl: './semester-layout.component.scss',
})
export default class SemesterLayoutComponent {
  // input
  @Input() titlePage: string = '';
  @Input() numberOfElements: string = '';
  @Input() showSemester: boolean = false;
  // properties
  semesterControl: FormControl = new FormControl();

  semesterOptions: InputSignal<{ label: string; value: string }[]> = input([
    { label: 'Semester 1', value: 'semester1' },
    { label: 'Semester 2', value: 'semester2' },
    { label: 'Semester 3', value: 'semester3' },
    { label: 'Semester 4', value: 'semester4' },
  ]);


}
