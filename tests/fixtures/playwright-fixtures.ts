// tests/fixtures/playwright-fixtures.ts
import { test as baseTest } from '@playwright/test';
import { createTestUser } from './userFactory';
import { RegisterPage } from '../../pages/RegisterPage';

type TestUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const test = baseTest.extend<{ user: TestUser }>({
  user: async ({ page, baseURL }, use) => {
    const user = createTestUser();

    const register = new RegisterPage(page);
    await page.goto(baseURL ?? '/');
    await register.goto();
    await register.register(user.firstName, user.lastName, user.email, user.password);
    await register.expectSuccess();

    await use(user);
  }
});

export const expect = test.expect;