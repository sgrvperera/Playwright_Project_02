import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input#small-searchterms, input[name="q"], input[type="search"], input[placeholder*="Search"]');
    this.searchButton = page.locator('button:has-text("Search"), input[type="submit"][value="Search"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async search(query: string) {
    await this.searchInput.fill(query);
    try {
      if ((await this.searchButton.count()) > 0) {
        await this.searchButton.click();
      } else {
        await this.searchInput.press('Enter');
      }
    } catch {
      await this.searchInput.press('Enter');
    }
  }

  async expectResults() {
    await this.page.locator('.product-item, .product, [data-productid], .search-results, .product-grid').first().waitFor({ state: 'visible', timeout: 7000 });
  }
}