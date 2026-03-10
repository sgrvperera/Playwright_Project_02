import { test, expect } from '../fixtures/playwright-fixtures';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';

test('DemoWebShop: register, login, search, add-to-cart, verify cart', async ({ page, user }) => {
  const base = process.env.BASE_URL ?? 'https://demowebshop.tricentis.com';
  const { email, password } = user;

  const login = new LoginPage(page);
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  // login (fixture already registered the user)
  await page.goto(base);
  await login.goto();
  await login.login(email, password);
  await login.expectLoggedIn();

  // search
  await home.goto();
  await home.search('book');
  await home.expectResults();

  // open first product and add to cart
  const firstProduct = page.locator('.product-item, .product, [data-productid]').first();
  await firstProduct.click();

  await product.addToCart();
  await product.expectAdded();

  // verify cart
  await cart.goto();
  const count = await cart.itemCount();
  expect(count).toBeGreaterThan(0);
});