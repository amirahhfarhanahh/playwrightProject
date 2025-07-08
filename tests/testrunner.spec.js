import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.locator('html').click();
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('testing');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByTestId('todo-title').click();
  await expect(page.getByTestId('todo-title')).toBeVisible();
  await page.locator('html').click();
  await page.getByRole('link', { name: 'real TodoMVC app.' }).click();
  await expect(page.getByRole('banner').locator('div').filter({ hasText: 'Helping you select an MV*' }).getByRole('img')).toBeVisible();
  await expect(page.getByRole('navigation')).toMatchAriaSnapshot(`
    - link "View on GitHub":
      - /url: https://github.com/tastejs/todomvc
    `);
});