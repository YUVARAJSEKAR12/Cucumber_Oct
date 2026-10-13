import { Before,After, Status } from "@cucumber/cucumber";
import{chromium} from '@playwright/test';
import { CustomBrowser } from "../support/customBrowser";

Before( async function (this:CustomBrowser){
    this.browser= await chromium.launch({
        headless:false
    });
    this.page = await this.browser.newPage();
})

After(async function(this:CustomBrowser, scenario){
    if(scenario.result?.status===Status.FAILED){
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, "image/png")
    }
    await this.browser.close();
    
})