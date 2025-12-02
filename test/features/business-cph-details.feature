Feature: Consolidated View CPH Details

  @basic
  Scenario: CPH Details tab exists and opens with no errors
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: To the left of the screen, I see a table with CPH number, Parish, Start Date, End Date columns
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: A search box is present
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: To the right of the screen, I see a pane with CPH number, Parish, Start Date, End Date, Coordinates (x, y), Species and CPH Address columns
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: When I select a new CPH, the details in the right-hand pane update
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the CPH number column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Parish column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Species column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the CPH Address column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a blank value in the search box and press enter -> All records are displayed
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Select a business that has no CPH’s -> A message is displayed in the table that indicates there are no CPH’s
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: The CPH table is ordered by CPH number, then start date
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: When opening the tab for the first time, the first CPH in the list is selected and the data is shown
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Check CPH data correctness
    Given I have selected a business with SBI XXX
    And I have selected CPH YYY
    Then I see the correct list of CPH's for that business
    And the CPH data for that business is correct
