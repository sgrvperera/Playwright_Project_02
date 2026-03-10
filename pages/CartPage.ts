import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart-item, .shopping-cart-table tbody tr, .cart-row, [class*="cart"] .item');
  }

  async goto() {
    await this.page.goto('/cart');
  }

  async itemCount() {
    return await this.cartItems.count();
  }
}