import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/logins.json'

const { validLogins, invalidLogins } = loginData;

for (const { username, password } of validLogins) {
    test(`Successfull login for set: ${username} / ${password}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(username, password);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    });
}

for (const { username, password, expectedError } of invalidLogins) {
    test(`Login fails: ${expectedError}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(username, password);
        await expect(loginPage.errorMessage).toContainText(expectedError);
    });
}