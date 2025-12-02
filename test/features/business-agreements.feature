Feature: Consolidated View Agreements page

  @basic
  Scenario: Agreements tab exists and opens with no errors
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: I see an “Agreements” table with the correct columns and an option to view the record
    Given I am on home page
    When I click the Documentation tab
    Then I see Reference, Year, Agreement Name, Type, Start Date, End Date, Status columns
    And An option to view the record

  @basic
  Scenario: A search box is present
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: After selecting an agreement, the page updates to show a new page with the correct fields
    Given I am on the Agreements page
    When I select an agreement
    Then I see a header with 'Agreement Name' as the title
    And I see underneath the header the following fields are shown: Reference, Year, Type, Start Date, End Date, Status
    And I see a “payment schedules” table with the following columns: Sheet, Parcel, Description, Action Area (ha), Action Length (m), Action Unit, Parcel Area, Payment Schedule, Commitment Term
    And I see an option to go back to see the main screen with Agreements table

  @intermediate
  Scenario: When I click on the back arrow on the sub-screen with the “payment schedules” table, then I am taken back to the main screen with the “Agreements” table
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Reference column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Year column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Agreement Name column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Type column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Into the search box, enter a partially matching string for a string in the Status column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a blank value in the search box and press enter -> All records are displayed
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Select a business that has no Agreements -> A message is displayed in the table that indicates there are no Agreements
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: The Agreements table is ordered by Year, most recent first
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: The agreements data is correct
    Given I have selected a business with SBI XXX
    And I have selected an agreement YYY
    Then Compare the list of Agreements for the business in the JSON that is returned
    And Select an Agreement at random and compare the Payment Schedules data to the the JSON that is returned
    And The screen data for Action Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.
    And The screen data for Parcel Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.

  @advanced
  Scenario: The “Payment Schedules” table is ordered by 'Sheet' and 'Parcel', 'Description', 'Payment Schedule' alphabetical
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title
