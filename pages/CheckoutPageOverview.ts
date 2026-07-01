import { Page, Locator } from '@playwright/test';
import { TopNavBar } from './TopNavBar';

export class CheckoutPageOverview {
    readonly page:              Page;
    readonly topNavBar:         TopNavBar;
    readonly paymentInfo:       Locator;
    readonly shippingInfo:      Locator;
    readonly itemTotalCost:     Locator;
    readonly taxCost:           Locator;
    readonly totalCost:         Locator;
    readonly cancelButton:      Locator;
    readonly finishButton:      Locator;
    
    constructor(page: Page) {
        this.page           = page;
        this.topNavBar      = new TopNavBar(page);
        this.paymentInfo    = page.getByTestId('payment-info-value');
        this.shippingInfo   = page.getByTestId('shipping-info-value');
        this.itemTotalCost  = page.getByTestId('subtotal-label');
        this.taxCost        = page.getByTestId('tax-label');
        this.totalCost      = page.getByTestId('total-label');
        this.cancelButton   = page.getByTestId('cancel');
        this.finishButton   = page.getByTestId('finish');
    }
}