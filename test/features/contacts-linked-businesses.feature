Feature: Consolidated View Contacts Linked Businesses

  @basic
  Scenario: Page opens with no errors
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Business list appears in left-hand side pane
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Search box is present in the left-hand side pane
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: On clicking on a business, the right-hand side pane appears with correct fields and a button for View business.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: On clicking on a Permission, another table, Permission Description, appears below the Permissions table.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a partially matching string for a string in the CRN column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a blank value in the search box and press enter -> All records are displayed
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a partially matching string for a string in the First Name column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a partially matching string for a string in the Last Name column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Clicking “View Customer” navigates the user to the relevant Contacts page in CRM.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a business in the RP Portal and navigate to YYY to see a list of their linked contacts. Confirm that the list in RP is the same as in CV.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a business in the RP Portal with no linked contacts. Confirm that the list in CV is blank.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Select a business and click on a permission that is NOT level "NO_ACCESS". Confirm that the Permission Description list is correct.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Select a business and click on a permission with level "NO_ACCESS". Confirm that the Permission Description list is empty and a text prompt shows "We didn't find any data to show at this time".
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title
