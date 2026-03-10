import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: 'tests',
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL: process.env.BASE_URL ?? 'https://demowebshop.tricentis.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ]
};

export default config;