Feature: Datatable concept
    #Changes done first time
    #Changes done second time

    #raw
    @raw
    Scenario: Validate the raw method
        When I Provided the Account details
            | Name    | Value |
            | Yuvaraj | Admin |
            | Sekar   | Cons  |

    @rows
    Scenario: Validate the rows method
        When I Provided the Account details rows
            | Name    | Value |
            | Yuvaraj | Admin |
            | Sekar   | Cons  |        


    @hashes
    Scenario: Validate the hashes method
        When I Provided the Account details hashes
            | Name    | Value |
            | Yuvaraj | Admin |
            | Sekar   | Cons  |        

    @rowshash
    Scenario: Validate the hashes method
        When I Provided the Account details rowhash
            | Name    | Value |
            | Yuvaraj | Admin |
            | Sekar   | Cons  |          