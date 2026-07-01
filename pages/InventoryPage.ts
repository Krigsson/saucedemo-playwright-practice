import {Page, Locator} from '@playwright/test'
import { TopNavBar } from './TopNavBar';

export class InventoryPage {
    readonly page:      Page;
    readonly topNavBar: TopNavBar;         

    constructor(page: Page) {
        this.page       = page;
        this.topNavBar  = new TopNavBar(page);
    }

    async addItemToCart(item: string) {
        return this.page.getByTestId(`add-to-cart-${item}`).click();
    }
}