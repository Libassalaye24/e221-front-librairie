import type { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  component: BadgeComponent,
  title: 'Components / Atoms / Badge',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large', 'x-large'],
    },
    severity: {
      control: 'select',
      options: ['primary', 'accent', 'warn', 'success', 'info', 'danger'], // ajustez selon vos valeurs
    },
  },
};
export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    value: 'Val',
    severity: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    value: 'With icon',
    severity: 'warn',
    icon: 'pi pi-times'
  },
};
