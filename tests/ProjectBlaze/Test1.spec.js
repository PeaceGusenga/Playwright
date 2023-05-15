//add specific modules required
const { test, expect } = require('@playwright/test');

// async keyword waits for the page to load and run steps sequentailly which is necesary 
//for testing
test('visit site', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/blaze/);
  });
  
  test('view cart', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Cart'}).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*cart/);
  });