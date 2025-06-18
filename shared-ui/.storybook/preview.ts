import 'zone.js';
import Aura from '@primeng/themes/aura';
import { PrimeNG } from 'primeng/config';
import { APP_INITIALIZER } from '@angular/core';
import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

function provideTheme(config: PrimeNG) {
  return () => {
    config.theme.set({
      preset: Aura,
      options: {
        darkModeSelector: false,
      },
    });
  };
}

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        {
          provide: APP_INITIALIZER,
          useFactory: provideTheme,
          deps: [PrimeNG],
          multi: true,
        },
      ],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export default preview;
