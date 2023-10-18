/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { mergeConfig, defineConfig as defineViteConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
  },
});

const viteConfig = defineViteConfig({
  plugins: [react()],
});

export default mergeConfig(vitestConfig, viteConfig);
