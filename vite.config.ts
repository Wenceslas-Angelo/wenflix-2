/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { mergeConfig, defineConfig as defineViteConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setup.ts',
  },
});

const viteConfig = defineViteConfig({
  plugins: [react(), EnvironmentPlugin(['VITE_APP_API_KEY'])],
});

export default mergeConfig(viteConfig, vitestConfig);
