import { Page, Locator } from "@playwright/test"
import { TopNavBar } from "./TopNavBar"

export class CheckoutPageComplete {
    readonly page:                  Page;
    readonly topNavBar:             TopNavBar;
    readonly completeHeaderText:    Locator;
    readonly completeText:          Locator;
    readonly backHomeButton:        Locator;

    constructor(page: Page){ 
        this.page                   = page;
        this.topNavBar              = new TopNavBar(page);
        this.completeHeaderText     = page.getByTestId('complete-header');
        this.completeText           = page.getByTestId('complete-text');
        this.backHomeButton         = page.getByTestId('back-to-products');
    }
}