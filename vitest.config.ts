import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/tests/setupTests.ts',
    include: ['**/*.test.{js,ts,jsx,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    reporters: ['default', ['junit', { outputFile: 'coverage/junit.xml' }]],
  },
});
