import { Given, When, Then } from "@cucumber/cucumber";
import { CustomBrowser } from "../support/customBrowser";
import { LoginPage } from "../pages/loginPage";

Given('Launch the Browser', async function (this:CustomBrowser) {
    await this.page.goto("https://adactinhotelapp.com/index.php")
});

When('Enter the username {string}', async function (this:CustomBrowser,username:string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.enterUsername(username);
});

When('Enter the password {string}', async function (password) {
    console.log(password);
});

Then('Validate the home page', async function () {
    console.log("homepage")
});

When('Enter the user {string}', async function (user) {
    console.log(user)
});

When('Enter the pass {string}', async function (pass) {
    console.log(pass)
});

When('Click the login button', function () {
    console.log("login button")
});


When('I Provided the Account details', async function (dataTable) {
    const data = dataTable.raw();
    console.log(data);
});

When('I Provided the Account details rows', async function (dataTable) {
    const data = dataTable.rows();
    console.log(data);
});

When('I Provided the Account details hashes', async function (dataTable) {
    const data = dataTable.hashes();
    console.log(data);
    for (const test of data) {
        console.log(test.Name);
    }
});


When('I Provided the Account details rowhash', async function (dataTable) {
    const data = dataTable.rowsHash();
    console.log(data);
    console.log(data.Name);
});