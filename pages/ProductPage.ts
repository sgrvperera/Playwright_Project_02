import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly successNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('button:has-text("Add to cart"), input[value="Add to cart"], button[id*="add-to-cart"]');
    this.successNotification = page.locator('.bar-notification, .message');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async expectAdded() {
    await this.successNotification.waitFor({ state: 'visible', timeout: 7000 });
    await this.page.getByText('The product has been added').waitFor({ state: 'visible', timeout: 7000 });
  }
}