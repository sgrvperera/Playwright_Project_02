import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input#Email, input[name="Email"], input[type="email"]');
    this.passwordInput = page.locator('input#Password, input[name="Password"], input[type="password"]');
    this.loginButton = page.locator('button:has-text("Log in"), input[value="Log in"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoggedIn() {
    await this.page.getByText('Log out').waitFor({ state: 'visible', timeout: 7000 });
  }
}