Feature: Consolidated View Applications page

  @basic
  Scenario: Applications tab exists and opens with no errors
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: I see an applications table with columns for: Application ID, Year, Application Name, Status
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: A search box is present
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: The right-hand pane has the correct title and fields
    Given I am on home page
    When I click the Documentation tab
    Then The right-hand pane has a title corresponding to the 'application name' field of the selected application
    And The right-hand pane has Application ID, Scheme, Year, Status, Status (portal), Submitted Date, Agreement References, Last Movement and Last Movement Date/Time columns
    And The right-hand pane has, in the bottom-right, a “Movements History” table with Date/Time, Movement and Check columns

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Application ID column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Application Name column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Year column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Scheme column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Status column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Agreement References column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a blank value in the search box and press enter -> All records are displayed
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Select a business that has no Applications -> A message is displayed in the table that indicates there are no Applications
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: The applications data is correct
    Given I have selected a business with SBI XXX
    And I have selected an application YYY
    Then I see the correct list of applications
    And I see all the correct data in the right-hand pane fields
    And I see all the correct data in the Movements History table

  @advanced
  Scenario: When opening the tab for the first time, the first Application in the list is selected and the data is shown
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: The “Movements History” table is ordered by date/time
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title
