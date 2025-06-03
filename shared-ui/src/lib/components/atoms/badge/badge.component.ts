import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSeverity } from '../button/button.component';

@Component({
  selector: 'lib-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  value = input.required<string>();
  severity = input.required<ButtonSeverity>();
  size = input< 'small' | 'large' | 'x-large'>('large');
  icon = input<string>()

  clickEvent = output<boolean>()

  emitOutPut() {
    this.clickEvent.emit(true);
  }
}
