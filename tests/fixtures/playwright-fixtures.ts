// tests/fixtures/playwright-fixtures.ts
import fs from 'fs';
import path from 'path';
import { test as baseTest } from '@playwright/test';
import { createTestUser } from './userFactory';
import { RegisterPage } from '../../pages/RegisterPage';

type TestUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function readSavedUser(): TestUser | null {
  const file = path.resolve(process.cwd(), 'test-user.json');
  if (fs.existsSync(file)) {
    try {
      const json = fs.readFileSync(file, 'utf-8');
      return JSON.parse(json) as TestUser;
    } catch {
      return null;
    }
  }
  return null;
}

export const test = baseTest.extend<{ user: TestUser }>({
  user: async ({ page, baseURL }, use) => {
    // Try to read test user created by global-setup
    let user = readSavedUser();

    if (!user) {
      // Fallback: if global-setup didn't run (e.g., local dev before global-setup), create via UI
      user = createTestUser();
      const register = new RegisterPage(page);
      const safeBase = (baseURL && baseURL.trim()) || process.env.BASE_URL || 'https://demowebshop.tricentis.com';
      await page.goto(safeBase);
      await register.goto();
      await register.register(user.firstName, user.lastName, user.email, user.password);
      await register.expectSuccess();
      // optionally save to disk so subsequent runs reuse it
      try {
        fs.writeFileSync(path.resolve(process.cwd(), 'test-user.json'), JSON.stringify(user, null, 2));
      } catch {
        /* ignore write errors */
      }
    }

    // Yield the user (tests can use email/password if needed)
    await use(user);
  }
});

export const expect = test.expect;