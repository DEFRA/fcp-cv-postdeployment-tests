Feature: Consolidated View Business Land Details page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the Land Details page
    Then I see a Date filter
    And I see a Land Summary section with a header 'Land Summary'
    And the Land Summary section has fields for 'Total Number of Parcels, Total Area (ha), Total Parcels with Pending Customer Notified Land Changes'
    And I see a Land Summary table with column headers for 'Code, Land Cover, Area (ha)'
    And I see a Parcels pane with a search box and a Parcels table
    And the Parcels table has column headers for 'Sheet, Parcel, Area (ha), Land Change?'

  @basic @possible-vi-test
  Scenario: Parcel summary section is displayed correctly.
    Given I am on the Land Details page
    When I select a Parcel in the Parcels table
    Then I see a Parcel Summary with a bold header which is a concatenation of the sheet and parcel codes selected
    And the Parcel Summary has fields for 'Area (ha), Pending Customer Notified Land Change?, Effective Date From, Effective Date To'
    And the land parcel summary table has column headers for 'Code, Land Cover and Area (ha)'

  @intermediate
  Scenario: The Date selector updates the screen
    Given I am on the Land Details page
    When I select a new date
    Then the page refreshes the data

  @intermediate
  Scenario: The Date selector cannot be blank
    Given I am on the Land Details page
    When I delete all the text in the Date field
    And Press the Enter key
    Then a warning message is displayed 'Date must be in dd/mm/yyy format. For example 25/12/2024'

  @intermediate
  Scenario: The Date selector only accepts the correct date format
    Given I am on the Land Details page
    When I enter the following as dates
      | label        | value                |
      | Sheet        | aaa, 01/01, 32/32/32 |
    And Press the Enter key
    Then a warning message is displayed 'Date must be in dd/mm/yyy format. For example 25/12/2024'

  @intermediate
  Scenario: The Date selector only accepts current or past dates
    Given I am on the Land Details page
    When I enter the date '31/12/2040'
    And Press the Enter key
    Then a warning message is displayed 'Date must be todays date or in the past.'

  @intermediate
  Scenario: The Date selected must be on or after 01/01/2015
    Given I am on the Land Details page
    When I enter the date '31/12/2014'
    And Press the Enter key
    Then a warning message is displayed 'Date must on or after 01/01/2015'

  @intermediate @data-dependent
  Scenario: Searching for a partially matching string in the Sheet column filters the Parcels table correctly.
    Given I have selected the business with SBI '0000000001'
    And I am on the Land Details page
    When I enter 'TS0' in the search box
    And Press the Enter key
    Then I see the correct list of parcels as follows
      | label        | value            |
      | Sheet        | TS01, TS01, TS02 |
      | Parcel       | AB12, AB13, XE22 |
      | Area (ha)    | 12, 2, 2         |
      | Land Change? | No, No, Yes      |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the correct list of parcels as follows
      | label        | value                        |
      | Sheet        | TS01, TS01, TS02, XT32, XT54 |
      | Parcel       | AB12, AB13, XE22, RR22, RR23 |
      | Area (ha)    | 12, 2, 2, 66, 23             |
      | Land Change? | No, No, Yes, Yes, No         |

  @intermediate @data-dependent
  Scenario: Searching for a partially matching string in the Parcel column filters the Parcels table correctly.
    Given I have selected the business with SBI '0000000001'
    And I am on the Land Details page
    When I enter 'AB1' in the search box
    And Press the Enter key
    Then I see the correct list of parcels as follows
      | label        | value      |
      | Sheet        | TS01, TS01 |
      | Parcel       | AB12, AB13 |
      | Area (ha)    | 12, 2      |
      | Land Change? | No, No     |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the correct list of parcels as follows
      | label        | value                        |
      | Sheet        | TS01, TS01, TS02, XT32, XT54 |
      | Parcel       | AB12, AB13, XE22, RR22, RR23 |
      | Area (ha)    | 12, 2, 2, 66, 23             |
      | Land Change? | No, No, Yes, Yes, No         |

  @advanced @data-dependent
  Scenario: An appropriate warning is shown when a business has no land entries.
    Given I have selected the business with SBI '0000000002'
    When I navigate to the Land Details page
    Then I see the following data in the Land Summary section
      | label                                                     | value |
      | Total Number of Parcels                                   | 0     |
      | Total Area (ha)                                           | 0     |
      | Total Parcels with Pending Customer Notified Land Changes | 0     |
    And I see the following data in the Land Summary table
      | label      | value                                                  |
      | Code       | 110, 120, 130                                          |
      | Land Cover | Arable Land, Permanent grass land, Permanent crop land |
      | Area (ha)  | 0, 0, 0                                                |
    And I see a warning message 'We didn't find any data to show at this time' under the Parcels table

  @advanced
  Scenario: Date formatting is handled correctly.
    Given I have selected the business with SBI '0000000001'
    And I am on the Land Details page
    When I change the date to
      | label | value                                                                                                                               |
      | Date  | 01/01/2025,01/02/2025,01/03/2025,01/04/2025,01/05/2025,01/06/2025,01/07/2025,01/08/2025,01/09/2025,01/10/2025,01/11/2025,01/12/2025 |
    Then the page refreshes the data

  @advanced @data-dependent
  Scenario: Land details data is shown correctly for today's date
    Given I have selected the business with SBI '0000000001'
    And I am on the Land Details page
    Then I see the following data in the Land Summary section
      | label                                                     | value |
      | Total Number of Parcels                                   | 5     |
      | Total Area (ha)                                           | 12.5  |
      | Total Parcels with Pending Customer Notified Land Changes | 1     |
    And I see the following data in the Land Summary table
      | label      | value                                                  |
      | Code       | 110, 120, 130                                          |
      | Land Cover | Arable Land, Permanent grass land, Permanent crop land |
      | Area (ha)  | 10, 2.5, 0                                             |
    And I see the correct list of parcels in the Parcels table as follows
      | label        | value                        |
      | Sheet        | TS01, TS01, TS02, XT32, XT54 |
      | Parcel       | AB12, AB13, XE22, RR22, RR23 |
      | Area (ha)    | 12, 2, 2, 66, 23             |
      | Land Change? | No, No, Yes, Yes, No         |
    When I click on the parcel 'TS01 AB12'
    Then I see a Parcel Summary section with a bold header 'TS01 AB12'
    And the Parcel Summary has field data as follows
      | label                                  | value      |
      | Area (ha)                              | 5.3        |
      | Pending Customer Notified Land Change? | No         |
      | Effective Date From                    | 01/01/2020 |
      | Effective Date To                      | 31/12/2040 |
    And the Parcel Summary table has data as follows
      | label                                  | value                     |
      | Code                                   | 130, 243                  |
      | Land Cover                             | Permanent Grassland, Pond |
      | Area (ha)                              | 5.3, 0.1                  |

  @advanced @data-dependent
  Scenario: Land details data is shown correctly for the earliest valid date - 01/01/2015
    Given I have selected the business with SBI '0000000001'
    And I am on the Land Details page
    When I enter '01/01/2015' into the Date picker
    And Press the Enter key
    Then I see the following data in the Land Summary section
      | label                                                     | value |
      | Total Number of Parcels                                   | 5     |
      | Total Area (ha)                                           | 12.5  |
      | Total Parcels with Pending Customer Notified Land Changes | 1     |
    And I see the following data in the Land Summary table
      | label      | value                                                  |
      | Code       | 110, 120, 130                                          |
      | Land Cover | Arable Land, Permanent grass land, Permanent crop land |
      | Area (ha)  | 10, 2.5, 0                                             |
    And I see the correct list of parcels in the Parcels table as follows
      | label        | value                        |
      | Sheet        | TS01, TS01, TS02, XT32, XT54 |
      | Parcel       | AB12, AB13, XE22, RR22, RR23 |
      | Area (ha)    | 12, 2, 2, 66, 23             |
      | Land Change? | No, No, Yes, Yes, No         |
    When I click on the parcel 'TS01 AB12'
    Then I see a Parcel Summary section with a bold header 'TS01 AB12'
    And the Parcel Summary has field data as follows
      | label                                  | value      |
      | Area (ha)                              | 5.3        |
      | Pending Customer Notified Land Change? | No         |
      | Effective Date From                    | 01/01/2020 |
      | Effective Date To                      | 31/12/2040 |
    And the Parcel Summary table has data as follows
      | label                                  | value                     |
      | Code                                   | 130, 243                  |
      | Land Cover                             | Permanent Grassland, Pond |
      | Area (ha)                              | 5.3, 0.1                  |

  @advanced @data-dependent
  Scenario: Land details data is shown correctly for a valid date
    Given I have selected the business with SBI '0000000001'
    And I am on the Land Details page
    When I enter '15/06/2020' into the Date picker
    And Press the Enter key
    Then I see the following data in the Land Summary section
      | label                                                     | value |
      | Total Number of Parcels                                   | 5     |
      | Total Area (ha)                                           | 12.5  |
      | Total Parcels with Pending Customer Notified Land Changes | 1     |
    And I see the following data in the Land Summary table
      | label      | value                                                  |
      | Code       | 110, 120, 130                                          |
      | Land Cover | Arable Land, Permanent grass land, Permanent crop land |
      | Area (ha)  | 10, 2.5, 0                                             |
    And I see the correct list of parcels in the Parcels table as follows
      | label        | value                        |
      | Sheet        | TS01, TS01, TS02, XT32, XT54 |
      | Parcel       | AB12, AB13, XE22, RR22, RR23 |
      | Area (ha)    | 12, 2, 2, 66, 23             |
      | Land Change? | No, No, Yes, Yes, No         |
    When I click on the parcel 'TS01 AB12'
    Then I see a Parcel Summary section with a bold header 'TS01 AB12'
    And the Parcel Summary has field data as follows
      | label                                  | value      |
      | Area (ha)                              | 5.3        |
      | Pending Customer Notified Land Change? | No         |
      | Effective Date From                    | 01/01/2020 |
      | Effective Date To                      | 31/12/2040 |
    And the Parcel Summary table has data as follows
      | label                                  | value                     |
      | Code                                   | 130, 243                  |
      | Land Cover                             | Permanent Grassland, Pond |
      | Area (ha)                              | 5.3, 0.1                  |


