import { Page } from 'playwright';

export class LoginPage {
    constructor(private page: Page) { }
    async enterUsername(username: string) {
        await this.page.locator("#username").fill(username);
    }
    async enterPassword(password: string) {
        await this.page.locator("#username").fill(password);
    }

    async clickLogin() {
        await this.page.locator("#login").click();
    }
    async clickLogin2() {
        await this.page.locator("#login").click();
    }
     async clickLogin1() {
    }


}
