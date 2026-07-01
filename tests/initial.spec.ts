import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPageYourInfo } from '../pages/CheckoutPageYourInfo';
import { CheckoutPageOverview } from '../pages/CheckoutPageOverview';
import { CheckoutPageComplete } from '../pages/CheckoutPageComplete';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
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

test('Add item to card', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addItemToCart('sauce-labs-fleece-jacket');
    await inventoryPage.topNavBar.cartLink.click();
    await expect(page.getByTestId('inventory-item-name')).toContainText('Sauce Labs Fleece Jacket');
});


test('Making a simple purchase', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPageInfo = new CheckoutPageYourInfo(page);
    const checkoutPageOverview = new CheckoutPageOverview(page);
    const checkoutPageComplete = new CheckoutPageComplete(page);

    await inventoryPage.addItemToCart('sauce-labs-bolt-t-shirt');
    await inventoryPage.topNavBar.cartLink.click();
    await cartPage.checkoutButton.click();
    await checkoutPageInfo.fillUserInformation('test1', 'test2', '60001');
    await checkoutPageInfo.continueButton.click();
    await checkoutPageOverview.finishButton.click();
    await expect(checkoutPageComplete.completeHeaderText).toContainText('Thank you for your order!');
    await expect(checkoutPageComplete.completeText).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
});