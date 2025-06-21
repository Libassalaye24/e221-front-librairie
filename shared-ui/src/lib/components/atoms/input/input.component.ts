import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { HelperType, InputState, InputVariant } from '@e221-front-office/shared-ui';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor{
  private readonly formBuilder = inject(FormBuilder);

  @Input() id = '';
  @Input() name = '';
  @Input() label = '';
  @Input() leftIcon = '';
  @Input() rightIcon = '';
  @Input() helperText = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() inputType = 'text';
  @Input() state: InputState = 'default';
  @Input() helperType: HelperType = 'info';
  @Input() variant: InputVariant = 'default';
  @Input() size: 'small'  | 'large' = 'small';
  @Input() rounded: 'rounded' | 'rounded-full' | '' = 'rounded-full';
  @Input() customClass: string = '';

  assets = 'assets/icons/asterix.svg';
  formGroup: FormGroup = new FormGroup({});
  inputControl = new FormControl<string | null>(null);

  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    if (this.state === 'disabled') {
      this.inputControl.disable();
    }

    this.formGroup = this.formBuilder.group({
      field: [null],
    });

    // Écouter les changements de valeur
    this.inputControl.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  getHelperIconClass(): string {
    switch (this.helperType) {
      case 'error':
        return 'pi pi-exclamation-circle text-danger';
      case 'warning':
        return 'pi pi-exclamation-triangle text-warning';
      case 'success':
        return 'pi pi-check-circle text-success';
      case 'info':
      default:
        return 'pi pi-info-circle';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputControl.disable();
    } else {
      this.inputControl.enable();
    }
  }

  writeValue(value: any): void {
    this.inputControl.setValue(value, { emitEvent: false });
  }
}
