import { Component, input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
export type ButtonSeverity = | null
  | 'info'
  | 'warn'
  | 'help'
  | 'danger'
  | undefined
  | 'success'
  | 'primary'
  | 'contrast'
  | 'secondary'
  | 'black';

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [NgClass],
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  label = input.required<string>();
  loading = input<boolean>(false);
  customClass = input<string>('');
  disabled = input<boolean>(false);
  leftIcon = input<string>('');
  rightIcon = input<string>('');
  variant = input<'outlined' | 'text' | undefined>(undefined);
  typeButton = input<'submit' | 'button'>('button');
  outlined = input<boolean>(false);
  severity = input.required<ButtonSeverity>();
  size = input< 'small' | 'large' | 'x-large'>('large');
  rounded = input< 'rounded' | 'rounded-full' | ''>('');

  constructor() {}

  ngOnInit() {
    //
    console.log('Init data');
  }
}
