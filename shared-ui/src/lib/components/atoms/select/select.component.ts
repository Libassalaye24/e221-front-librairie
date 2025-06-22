import { HelperType } from '../../../models';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';
@Component({
  selector: 'lib-select',
  standalone: true,
  styleUrl: './select.component.scss',
  templateUrl: './select.component.html',
  imports: [CommonModule, ReactiveFormsModule, SelectModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  formBuilder = inject(FormBuilder);

  assets = 'icons/asterix.svg';
  formGroup: FormGroup = new FormGroup({});

  @Input() helperText = '';
  @Input() label = 'Label';
  @Input() required = false;
  @Input() options : unknown[] = [];
  @Input() size!: 'small' | 'large';
  @Input() placeholder = 'Placholder';
  @Input() helperType: HelperType = 'info';
  @Input() variant?:
    | 'error'
    | 'default'
    | 'warning'
    | 'disabled'
    | 'no-response' = 'default';

  getHelperIconClass(): string {
    switch (this.helperType) {
      case 'error':
        return 'pi pi-times-circle';
      case 'warning':
        return 'pi pi-exclamation-triangle';
      case 'success':
        return 'pi pi-check-circle';
      case 'info':
      default:
        return 'pi pi-info-circle';
    }
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      selectedCity: ['5', [Validators.required]],
    });
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }
}
