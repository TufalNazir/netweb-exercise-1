import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run student:serve:development',
        production: 'nx run student:serve:production',
      },
      ciWebServerCommand: 'nx run student:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
