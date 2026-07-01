import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import loginData from '../test-data/logins.json';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(loginData.validLogins[0].username, loginData.validLogins[0].password);
});

test('Card redirection', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.topNavBar.openCart();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});

test('About redirection', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.topNavBar.openAbout();
    await expect(page).toHaveURL('https://saucelabs.com/');
});

test('Logout user', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.topNavBar.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});

