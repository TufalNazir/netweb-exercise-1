import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'teacher',
  exposes: {
    './Routes': 'teacher/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
