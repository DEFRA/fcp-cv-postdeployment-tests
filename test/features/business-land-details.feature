Feature: Consolidated View Business Land Details page

  @intermediate
  Scenario: The Date selector updates the screen
    Given I have gone to the Land Details page
    When I select a new date
    Then the page refreshes the data

  @intermediate
  Scenario: The Date selector cannot be blank
    Given I have gone to the Land Details page
    When I delete all the text in the Date field
    And Press the Enter key
    Then I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table

  @intermediate
  Scenario: The Date selector only accepts the correct date format - no non numeric characters
    Given I have gone to the Land Details page
    When I enter 'aaa' into the date picker
    And Press the Enter key
    Then I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table

  @intermediate
  Scenario: The Date selector only accepts the correct date format - no incomplete dates
    Given I have gone to the Land Details page
    When I enter '01/01' into the date picker
    And Press the Enter key
    Then I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table

  @intermediate
  Scenario: The Date selector only accepts the correct date format - no incorrect dates
    Given I have gone to the Land Details page
    When I enter '32/32/32' into the date picker
    And Press the Enter key
    Then I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table

  @intermediate
  Scenario: The Date selector only accepts current or past dates
    Given I have gone to the Land Details page
    When I enter '31/12/2040' into the date picker
    And Press the Enter key
    Then I see a warning message 'Date must be todays date or in the past.' under the 'Land Date' table

  @intermediate
  Scenario: The Date selected must be on or after 01/01/2015
    Given I have gone to the Land Details page
    When I enter '31/12/2014' into the date picker
    And Press the Enter key
    Then I see a warning message 'Date must on or after 01/01/2015' under the 'Land Date' table

  @intermediate @data-dependent
  Scenario: Searching for a partially matching string in the Sheet column filters the Parcels table correctly.
    Given I have selected the business with SBI '1111111111'
    And I am on the Land Details page
    When I enter 'SS66' in the search box
    And Press the Enter key
    Then I see the correct list of parcels in the Parcels table as follows
      | label        | value  |
      | Sheet        | SS6627 |
      | Parcel       | 5662   |
      | Area (ha)    | 1.027  |
      | Land Change? | No     |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the correct list of parcels in the Parcels table as follows
      | label        | value          |
      | Sheet        | SS6627, SS6828 |
      | Parcel       | 5662, 3818     |
      | Area (ha)    | 1.027, 1.027   |
      | Land Change? | No, No         |

  @intermediate @data-dependent
  Scenario: Searching for a partially matching string in the Parcel column filters the Parcels table correctly.
    Given I have selected the business with SBI '1111111111'
    And I am on the Land Details page
    When I enter '818' in the search box
    And Press the Enter key
    Then I see the correct list of parcels in the Parcels table as follows
      | label        | value  |
      | Sheet        | SS6828 |
      | Parcel       | 3818   |
      | Area (ha)    | 1.027  |
      | Land Change? | No     |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the correct list of parcels in the Parcels table as follows
      | label        | value          |
      | Sheet        | SS6627, SS6828 |
      | Parcel       | 5662, 3818     |
      | Area (ha)    | 1.027, 1.027   |
      | Land Change? | No, No         |

  @advanced @data-dependent
  Scenario: An appropriate warning is shown when a business has no land entries.
    Given I have selected the business with SBI '1000000000'
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
    And I see a warning message 'We didn't find any data to show at this time' under the 'Parcels' table

  @advanced
  Scenario: Date formatting is handled correctly.
    Given I have selected the business with SBI '1111111111'
    And I am on the Land Details page
    When I select the first day of every month
    Then no error is shown on screen

  @advanced @data-dependent
  Scenario: Land details data is shown correctly for today's date
    Given I have selected the business with SBI '1111111111'
    And I am on the Land Details page
    Then I see the following data in the Land Summary section
      | label                                                     | value  |
      | Total Number of Parcels                                   | 2      |
      | Total Area (ha)                                           | 2.0541 |
      | Total Parcels with Pending Customer Notified Land Changes | 0      |
    And I see the following data in the Land Summary table
      | label      | value                                                  |
      | Code       | 110, 130, 140                                          |
      | Land Cover | Arable Land, Permanent Grassland, Permanent Crops      |
      | Area (ha)  | 1.027, 0, 0                                            |
    And I see the correct list of parcels in the Parcels table as follows
      | label        | value          |
      | Sheet        | SS6627, SS6828 |
      | Parcel       | 5662, 3818     |
      | Area (ha)    | 1.027          |
      | Land Change? | No, No         |
    When I click on the parcel 'SS6627 5662'
    Then I see a Parcel Summary section with a bold header 'SS6627 5662'
    And the Parcel Summary has field data as follows
      | label                                  | value      |
      | Area (ha)                              | 1.027      |
      | Pending Customer Notified Land Change? | ...        |
      | Effective Date From                    | 25/07/2024 |
      | Effective Date To                      | 25/07/2024 |
    And the Parcel Summary table has data as follows
      | label                                  | value                            |
      | Code                                   | 110, 131                         |
      | Land Cover                             | Arable Land, Permanent Grassland |
      | Area (ha)                              | 1.027, 2.541                     |

  @advanced @data-dependent @require-mock-update
  Scenario: Land details data is shown correctly for the earliest valid date - 01/01/2015
    Given I have selected the business with SBI '0000000001'
    And I am on the Land Details page
    When I enter '01/01/2015' into the date picker
    And Press the Enter key
    Then I see the following data in the Land Summary section
      | label                                                     | value  |
      | Total Number of Parcels                                   | 2      |
      | Total Area (ha)                                           | 2.0541 |
      | Total Parcels with Pending Customer Notified Land Changes | 0      |
    And I see the following data in the Land Summary table
      | label      | value                                                  |
      | Code       | 110, 130, 140                                          |
      | Land Cover | Arable Land, Permanent Grassland, Permanent Crops      |
      | Area (ha)  | 1.027, 0, 0                                            |
    And I see the correct list of parcels in the Parcels table as follows
      | label        | value          |
      | Sheet        | SS6627, SS6828 |
      | Parcel       | 5662, 3818     |
      | Area (ha)    | 1.027          |
      | Land Change? | No, No         |
    When I click on the parcel 'SS6627 5662'
    Then I see a Parcel Summary section with a bold header 'SS6627 5662'
    And the Parcel Summary has field data as follows
      | label                                  | value      |
      | Area (ha)                              | 1.027      |
      | Pending Customer Notified Land Change? | ...        |
      | Effective Date From                    | 25/07/2024 |
      | Effective Date To                      | 25/07/2024 |
    And the Parcel Summary table has data as follows
      | label                                  | value                            |
      | Code                                   | 110, 131                         |
      | Land Cover                             | Arable Land, Permanent Grassland |
      | Area (ha)                              | 1.027, 2.541                     |

  @advanced @data-dependent @require-mock-update
  Scenario: Land details data is shown correctly for a valid date
    Given I have selected the business with SBI '0000000001'
    And I am on the Land Details page
    When I enter '15/06/2020' into the date picker
    And Press the Enter key
    Then I see the following data in the Land Summary section
      | label                                                     | value  |
      | Total Number of Parcels                                   | 2      |
      | Total Area (ha)                                           | 2.0541 |
      | Total Parcels with Pending Customer Notified Land Changes | 0      |
    And I see the following data in the Land Summary table
      | label      | value                                                  |
      | Code       | 110, 130, 140                                          |
      | Land Cover | Arable Land, Permanent Grassland, Permanent Crops      |
      | Area (ha)  | 1.027, 0, 0                                            |
    And I see the correct list of parcels in the Parcels table as follows
      | label        | value          |
      | Sheet        | SS6627, SS6828 |
      | Parcel       | 5662, 3818     |
      | Area (ha)    | 1.027          |
      | Land Change? | No, No         |
    When I click on the parcel 'SS6627 5662'
    Then I see a Parcel Summary section with a bold header 'SS6627 5662'
    And the Parcel Summary has field data as follows
      | label                                  | value      |
      | Area (ha)                              | 1.027      |
      | Pending Customer Notified Land Change? | ...        |
      | Effective Date From                    | 25/07/2024 |
      | Effective Date To                      | 25/07/2024 |
    And the Parcel Summary table has data as follows
      | label                                  | value                            |
      | Code                                   | 110, 131                         |
      | Land Cover                             | Arable Land, Permanent Grassland |
      | Area (ha)                              | 1.027, 2.541                     |


