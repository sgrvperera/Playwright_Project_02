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
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],
   globalSetup: require.resolve('./global-setup'),
  use: {
   storageState: process.env.STORAGE_STATE || 'storageState.json',
    baseURL: process.env.BASE_URL || 'https://demowebshop.tricentis.com',
   headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    trace: 'on',
    screenshot: 'on',
    video: 'on',
    
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    //{ name: 'firefox', use: { browserName: 'firefox' } },
    //{ name: 'chromium-headless', use: { browserName: 'chromium', headless: true } },
    //{ name: 'firefox-headless', use: { browserName: 'firefox', headless: true } },
    

  ]
};

export default config;