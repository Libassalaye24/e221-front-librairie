import { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  component: NavbarComponent,
  title: 'Components / Molecules / Navbar',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<NavbarComponent>;

export const Default: Story = {
  args: {},
};
