import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('input#FirstName, input[name="FirstName"]');
    this.lastName = page.locator('input#LastName, input[name="LastName"]');
    this.email = page.locator('input#Email, input[name="Email"], input[type="email"]');
    this.password = page.locator('input#Password, input[name="Password"]');
    this.confirmPassword = page.locator('input#ConfirmPassword, input[name="ConfirmPassword"]');
    this.registerButton = page.locator('button:has-text("Register"), input[value="Register"]');
  }

  async goto() {
    await this.page.goto('/register');
  }

  async register(firstName: string, lastName: string, email: string, password: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
    await this.registerButton.click();
  }

  async expectSuccess() {
    // check for the registration success text
    await this.page.getByText('Your registration completed').waitFor({ state: 'visible', timeout: 7000 });
  }
}