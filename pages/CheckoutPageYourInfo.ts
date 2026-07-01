import { Page, Locator } from "@playwright/test"
import { TopNavBar } from "./TopNavBar";

export class CheckoutPageYourInfo {
    readonly page:              Page;
    readonly topNavBar:         TopNavBar;
    readonly firstNameInput:    Locator;
    readonly lastNameInput:     Locator;
    readonly postalCodeInput:   Locator;
    readonly cancelButton:      Locator;
    readonly continueButton:    Locator;


    constructor(page: Page) {
        this.page               = page;
        this.topNavBar          = new TopNavBar(page);
        this.firstNameInput     = page.getByTestId('firstName');
        this.lastNameInput      = page.getByTestId('lastName');
        this.postalCodeInput    = page.getByTestId('postalCode');
        this.cancelButton       = page.getByTestId('cancel');
        this.continueButton     = page.getByTestId('continue');
    }

    async fillUserInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }
}