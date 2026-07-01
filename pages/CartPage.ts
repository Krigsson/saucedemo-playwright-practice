import { Page, Locator } from "@playwright/test"
import { TopNavBar } from "./TopNavBar";

export class CartPage {
    readonly page:                      Page;
    readonly topNavBar:                 TopNavBar;
    readonly continueShoppingButton:    Locator;
    readonly checkoutButton:            Locator;
    readonly cartItems:                 Locator;

    constructor(page: Page) {
        this.page                       = page;
        this.topNavBar                  = new TopNavBar(page);
        this.continueShoppingButton     = page.getByTestId("continue-shopping");
        this.checkoutButton             = page.getByTestId("checkout");
        this.cartItems                  = page.getByTestId("inventory-item");
    }

    async getItemByName(itemName: string) {
        return this.cartItems.filter({ hasText: itemName});
    }

    async removeItemFromCart(itemName: string) {
        this.page.getByTestId(`remove=${itemName}`);
    }
}