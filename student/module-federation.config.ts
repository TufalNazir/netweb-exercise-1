import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'student',
  exposes: {
    './Routes': 'student/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
