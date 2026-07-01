import {Page, Locator} from '@playwright/test'

export class TopNavBar{
    readonly page:          Page;
    readonly cartLink:      Locator;
    readonly menuButton:    Locator;
    readonly aboutButton:   Locator;
    readonly logoutButton:  Locator;  

    constructor(page: Page) {
        this.page           = page;
        this.cartLink       = page.getByTestId("shopping-cart-link");
        this.menuButton     = page.getByRole('button', {name: "Open Menu"});
        this.aboutButton    = page.getByTestId("about-sidebar-link");
        this.logoutButton   = page.getByTestId('logout-sidebar-link');
    }

    async openMenu() {
        await this.menuButton.click();
    }

    async logout() {
        await this.openMenu();
        await this.logoutButton.click();
    }

    async openAbout() {
        await this.openMenu();
        await this.aboutButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}