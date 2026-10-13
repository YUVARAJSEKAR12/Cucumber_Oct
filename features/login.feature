Feature: Login Page Validation

    Background:
        Given Launch the Browser
    @smoke
    Scenario: Validate the Valid credentials
        When Enter the username "testone"
        And Enter the password "Admin"
        Then Validate the home page

    
    Scenario: Validate the InValid credentials
        When Enter the username "testwo"
        And Enter the password "Admin2"
        Then Validate the home page

    Scenario Outline: validate the login details
        When Enter the user "<username>"
        And Enter the pass "<password>"
        And Click the login button
        Examples:
            | username | password |
            | Admin1   | Value 1  |
            | Admin2   | Value 2  |
            | Admin3   | Value 3  |
