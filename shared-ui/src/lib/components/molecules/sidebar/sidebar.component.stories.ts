import { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';

const meta: Meta<SidebarComponent> = {
  component: SidebarComponent,
  title: 'Components / Molecules / Sidebar 2',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
  args: {},
};
