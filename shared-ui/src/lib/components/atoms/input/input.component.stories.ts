import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';


const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Components / Atoms / Input',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, InputTextModule, IconField, InputIcon],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'invalid',
        'warning',
        'success',
        'no-fill',
        'no-response',
      ],
      defaultValue: 'default',
    },
    inputType: {
      control: 'select',
      defaultValue: 'text',
      options: ['text', 'email', 'password'],
    },
    required: {
      control: 'boolean',
    },
    helperType: {
      control: 'select',
      options: ['info', 'error', 'warning', 'success', 'none'],
      defaultValue: 'info',
    },
    leftIcon: {
      control: 'text',
    },
    rightIcon: {
      control: 'text',
    },
    rounded: {
      control: 'inline-radio',
      options: ['rounded', 'rounded-full']
    }
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

// Base story with default values
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Enter your username to reset your password.',
    id: 'username',
    name: 'username',
  },
};

// Stories for each variant
export const Invalid: Story = {
  args: {
    ...Default.args,
    variant: 'invalid',
    helperType: 'error',
    helperText: 'Username is required',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    variant: 'warning',
    helperType: 'warning',
    helperText: 'Username may contain special characters',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    variant: 'success',
    helperType: 'success',
    helperText: 'Username is available',
  },
};

export const NoResponse: Story = {
  args: {
    ...Default.args,
    variant: 'no-response',
  },
};

export const NoFill: Story = {
  args: {
    ...Default.args,
    variant: 'no-fill',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    state: 'disabled',
  },
};

// Stories with icons
export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: 'search',
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    rightIcon: 'search',
  },
};

export const WithBothIcons: Story = {
  args: {
    ...Default.args,
    leftIcon: 'user',
    rightIcon: 'search',
  },
};
