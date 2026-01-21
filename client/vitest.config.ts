import { defineConfig } from 'vitest/config';
import nextEnv from '@next/env';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

nextEnv.loadEnvConfig(process.cwd());

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.next/',
        'next.config.ts',
        'postcss.config.mjs',
        'tailwind.config.ts',
        '**/*.d.ts',
        '**/*.config.*',
        'test/**',
      ],
    },
    exclude: ['node_modules', '.next', 'dist'],
    setupFiles: ['./test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
