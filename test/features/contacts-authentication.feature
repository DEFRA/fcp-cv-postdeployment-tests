Feature: Consolidated View Contacts Authentication page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the Contacts Authentication page
    Then I see an 'Authentication' table with column headers as follows 'Memorable Date, Memorable Event, Memorable Place, Updated Date'
    And I see an 'Open Authentication Record' button
    And I see a 'Retrieved At' field
    And the table data row is populated

  @intermediate @deprecated
  Scenario: Clicking the Open Authentication Record button opens a new web page with the Authentication app displayed.
    Given I am on the Contacts Authentication page
    When I click the 'Open Authentication Record' button
    Then an 'Authentication App' web page is present

  @advanced @data-dependent
  Scenario: Contacts with no authentication data set should have all table data shown as NOT SET.
    Given I have selected a contact with no authentication data set
    When I navigate to the Contacts Authentication page
    Then All table entries should be shown as 'NOT SET'

  @advanced @data-dependent
  Scenario: Contacts who cannot be found in the authentication database should have all table data shown as NOT FOUND.
    Given I have selected a contact who is not in the authentication database
    When I navigate to the Contacts Authentication page
    Then All table entries should be shown as 'NOT FOUND'

  @advanced @data-dependent
  Scenario: Authentication data should be displayed correctly
    Given I have selected the contact with CRN '0000000001'
    When I navigate to the Contacts Authentication page
    Then All table entries should be shown as follows
      | label           | value       |
      | Memorable Date  | 01/02/2003  |
      | Memorable Event | Bar Mitzvah |
      | Memorable Place | Vegas       |
      | Updated Date    | 01/01/2025  |

  @advanced
  Scenario: The "Retrieved At" field is accurate
    Given I am on the Contacts Authentication page
    Then the Retrieved At field is equal to today's date and current time
