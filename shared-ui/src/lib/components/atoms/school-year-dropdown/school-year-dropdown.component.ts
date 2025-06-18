import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownInterface } from '../../../models/atoms/dropdown/dropdown.interface';


@Component({
  selector: 'lib-school-year-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './school-year-dropdown.component.html',
  styleUrl: './school-year-dropdown.component.scss',
})
export class SchoolYearDropdownComponent {
  @Input() placeholder: string = 'Sélectionner une année scolaire';
  @Input() selectedValue: string = '';
  @Input() clear: boolean = false;
  @Output() selectedValueChange = new EventEmitter<string>();
  @Input() size!: 'small' | 'large';
  @Input() label = 'Label';
  @Input() options: DropdownInterface[] = [
    {
      label: 'Année scolaire: 2024-2024',
      value: '2024-2024',
      icon: 'pi pi-calendar',
    },
    {
      label: 'Année scolaire: 2023-2024',
      value: '2023-2024',
      icon: 'pi pi-calendar',
    },
    {
      label: 'Année scolaire: 2022-2023',
      value: '2022-2023',
      icon: 'pi pi-calendar',
    },
    {
      label: 'Année scolaire: 2021-2022',
      value: '2021-2022',
      icon: 'pi pi-calendar',
    },
    {
      label: 'Année scolaire: 2020-2021',
      value: '2020-2021',
      icon: 'pi pi-calendar',
    },
  ];


  onYearChange(value: string) {
    this.selectedValue = value;
    this.selectedValueChange.emit(value);
  }
}
