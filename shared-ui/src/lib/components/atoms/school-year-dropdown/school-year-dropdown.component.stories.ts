import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { SchoolYearDropdownComponent } from './school-year-dropdown.component';

const meta: Meta<SchoolYearDropdownComponent> = {
  component: SchoolYearDropdownComponent,
  title: 'Components / Atoms / Dropdown',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, SelectModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<SchoolYearDropdownComponent>;

export const Default: Story = {
  args: {

  },
};
