import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'features/**/*.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
  fullyParallel: true,
});
