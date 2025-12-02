Feature: Consolidated View Business Land Details

  @basic
  Scenario: Page opens with no errors
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Date filter is present
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Land summary is present and has the correct fields.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: The Parcel Summary table exists and has the correct columns.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: In the bottom-left of the page there is a Parcels pane which has a search box and a Parcels table with the correct headers
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: When a Parcel is selected, the bottom-right of the page shows a Parcel summary
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Setting a new date refreshes the page
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a partially matching string for a string in the Sheet column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a blank value in the search box and press enter -> All records are displayed
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a partially matching string for a string in the Parcel column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a business in the RP Portal and navigate to YYY to see a list of their land parcels
    Given I am on home page
    When I click the Documentation tab
    Then Confirm that the data for Total Number of Parcels, Total Area, Total Number Of Parcels with Pending Changes matches RP
    And Confirm that the data in the summary table is correct in the summary section compared to RP.
    And Confirm that the list of land parcels is correct compared to RP.
    And Confirm each of the land parcels in the Parcels pane has the correct values for Sheet, Parcel, Area (ha) and Land Change?
    And Click on a parcel and confirm that the Area, Effective data from, Effective date to and Land change? fields are correct compared to RP.
    And Click on a parcel and confirm that the land parcel summary table is correct compared to RP.

  @advanced
  Scenario: Alter the date setting to 01/01/2015 (the earliest date we show) and repeat the test above.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Alter the date setting to 01/07/2020 and repeat the test above.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a business in the RP Portal with no land. Look up that business in CV and ensure this is handled gracefully.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Alter the date 12 times, to show the 1st of each month for the previous year (validates that the month formatting is working)
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title
