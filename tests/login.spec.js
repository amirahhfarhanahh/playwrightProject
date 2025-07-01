const { test, expect } = require('@playwright/test');

test('user can log in (Heroku demo site)', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/secure/);
  await expect(page.locator('h2')).toHaveText('Secure Area');
});
