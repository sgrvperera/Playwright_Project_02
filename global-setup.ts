// global-setup.ts
import fs from 'fs';
import path from 'path';
import { chromium, FullConfig } from '@playwright/test';
import { createTestUser } from './tests/fixtures/userFactory';
import { RegisterPage } from './pages/RegisterPage';

async function globalSetup(config: FullConfig) {
  // create a unique test user
  const user = createTestUser();

  // decide base URL: prefer env, then config projects' baseURL, then default
  const envBase = process.env.BASE_URL && process.env.BASE_URL.trim();
  const configBase = (config.projects && config.projects[0]?.use?.baseURL) || '';
  const baseURL = envBase || configBase || 'https://demowebshop.tricentis.com';

  // new: set baseURL on the context so relative navigations work
const browser = await chromium.launch();
const context = await browser.newContext({ baseURL });
const page = await context.newPage();

console.log(`[global-setup] Registering user ${user.email} on ${baseURL}`);
// now register.goto() can safely do page.goto('/register')
const register = new RegisterPage(page);
await register.goto();
  await register.register(user.firstName, user.lastName, user.email, user.password);
  await register.expectSuccess();

  // Save authenticated storage state to file so tests reuse the logged-in session
  const storagePath = path.resolve(process.cwd(), 'storageState.json');
  await context.storageState({ path: storagePath });
  console.log(`[global-setup] saved storage state to ${storagePath}`);

  // Save the user credentials to a file tests can read
  const userPath = path.resolve(process.cwd(), 'test-user.json');
  fs.writeFileSync(userPath, JSON.stringify(user, null, 2));
  console.log(`[global-setup] saved test user to ${userPath}`);

  await browser.close();
}

export default globalSetup;