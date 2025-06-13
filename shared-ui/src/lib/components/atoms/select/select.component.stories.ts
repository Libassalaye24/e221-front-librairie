import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'Components / Atoms / Select',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, SelectModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      defaultValue: 'normal',
      options: ['small', 'normal', 'large'],
    },
    required: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      defaultValue: 'default',
      options: ['default', 'error', 'warning', 'disabled', 'no-response'],
    },
  },
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    label: '',
    variant: 'default',
    helperText: '',
    options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }],
  },
};

// Stories for each variant
export const Danger: Story = {
  args: {
    ...Default.args,
    variant: 'error',
    helperType: 'error',
    helperText: 'Username is required',
  },
};

// Stories for each variant
export const NoResponse: Story = {
  args: {
    ...Default.args,
    variant: 'no-response',
  },
};

// Stories for each variant
export const Warning: Story = {
  args: {
    ...Default.args,
    variant: 'warning',
    helperType: 'warning',
  },
};

// Stories for each variant
export const Disabled: Story = {
  args: {
    ...Default.args,
    variant: 'disabled',
    helperType: 'info',
  },
};
