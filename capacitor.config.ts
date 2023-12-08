import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.recigo.admin',
  appName: 'recigo-admin',
  webDir: 'dist/recigo-admin/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
