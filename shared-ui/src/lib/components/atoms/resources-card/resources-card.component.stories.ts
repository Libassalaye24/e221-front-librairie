import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ResourcesCardComponent } from './resources-card.component';

const meta: Meta<ResourcesCardComponent> = {
  component: ResourcesCardComponent,
  title: 'Components / Atoms / ResourcesCardComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<ResourcesCardComponent>;

export const Default: Story = {
  args: {

  },
};

export const Active: Story = {
  args: {
    iconRight: 'pi pi-ellipsis-v',
    iconLeft: 'pi pi-folder',
    description: 'Classes & Sous-classes',
    variant: "active"
  },
};

