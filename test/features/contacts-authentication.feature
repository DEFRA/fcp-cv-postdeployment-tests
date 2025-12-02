Feature: Consolidated View Contacts Authentication

  @basic
  Scenario: Page opens with no errors.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Table appears with correct columns.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Open Authentication Record button and Retrieved At field are present.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Table data rows are populated.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Clicking the Open Authentication Record button opens a new web page with the Authentication app displayed.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a contact whose data is not set in the authentication database. Every entry in the table should show as NOT SET.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a contact whose data is not found in the authentication database. Every entry in the table should show as NOT FOUND.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a contact whose data is found in the authentication database. Confirm that entry in the table shows the same value as in the authentication database
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Open the authentication screen, the "Retrieved At" field should show today's date and the current time.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title
