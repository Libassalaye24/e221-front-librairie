import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components / Atoms / Button',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['outlined', 'text', undefined],
    },
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
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    severity: 'primary',
    leftIcon: '',
    rightIcon: '',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
    severity: 'primary',
    leftIcon: '',
    rightIcon: '',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'outlined',
    severity: 'secondary',
    leftIcon: '',
    rightIcon: '',
  },
};
export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
    severity: 'primary',
    leftIcon: '',
    rightIcon: '',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'With Icons',
    severity: 'primary',
    leftIcon: 'pi pi-check',
    rightIcon: 'pi pi-angle-right',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    severity: 'primary',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    severity: 'primary',
    disabled: true,
    leftIcon: '',
    rightIcon: '',
  },
};
