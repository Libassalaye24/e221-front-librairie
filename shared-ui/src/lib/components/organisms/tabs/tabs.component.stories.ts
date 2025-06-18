import { Tabs, TabsComponent } from '@e221-front-office/shared-ui';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

const meta: Meta<TabsComponent> = {
  component: TabsComponent,
  title: 'Components / Organisms / Tabs',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    applicationConfig({
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }),
  ],
  argTypes: { selectedTab: { action: 'Tab Selctionnée' } },
};

export default meta;

type Story = StoryObj<TabsComponent>;

const customTabs: Tabs[] = [
  { header: 'Domaines ', id: 1, labelHeader: 'Domaines', icon: '' },
  { header: 'Mention ', id: 2, labelHeader: 'Mention', icon: '' },
  { header: 'Spécialité ', id: 3, labelHeader: 'Spécialité', icon: '' },
  { header: 'Cycle ', id: 5, labelHeader: 'Cycle', icon: '' },
  { header: 'Niveau ', id: 6, labelHeader: 'Niveau', icon: '' },
];

const withIcons: Tabs[] = [
  { header: 'Sites ', id: 1, labelHeader: 'Sites', icon: 'pi-home' },
  { header: 'Départements ', id: 2, labelHeader: 'Départements', icon: 'pi-map' },
  { header: 'Mon établissement ', id: 3, labelHeader: 'Mon établissement', icon: 'pi-building' },
];
export const Default: Story = {
  args: { tabs: customTabs, custom: false },
};

export const WithIcons: Story = {
  args: { tabs: withIcons, custom: true },
};
