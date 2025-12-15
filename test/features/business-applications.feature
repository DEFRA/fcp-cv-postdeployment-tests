Feature: Consolidated View Applications page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the Applications page
    Then I see an Applications table with column headers for 'Application ID, Year, Application Name, Status'
    And the first item in the Applications table is selected
    And I see a search box
    And there is an Application Details pane on the right-hand pane
    And the Application Details pane has a title corresponding to the 'Application Name' field of the selected application
    And the Application Details pane has fields for 'Application ID, Scheme, Year, Status, Status (Portal), Submitted Date, Agreement References, Last Movement, Last Movement Date/Time'
    And the Application Details pane has a Movement History section
    And the Movement History section has a Movements History table with column headers for 'Date/Time, Movement, Check'

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Application ID column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Applications page
    When I enter '658' in the search box
    Then I see the the correct list of Applications as follows
      | label            | value                  |
      | Application ID   | 2203658                |
      | Year             | 2025                   |
      | Application Name | Domestic Capital Claim |
      | Status           | IN PROGRESS            |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Applications as follows
      | label            | value                                                           |
      | Year             | 2025,2024,2023                                                  |
      | Application ID   | 2203658, 2203641, 2200679                                       |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments |
      | Status           | IN PROGRESS, IN PROGRESS, SUBMITTED                             |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Year column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Applications page
    When I enter '2024' in the search box
    Then I see the the correct list of Applications as follows
      | label            | value                  |
      | Application ID   | 2203641                |
      | Year             | 2024                   |
      | Application Name | Domestic Capital Claim |
      | Status           | IN PROGRESS            |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Applications as follows
      | label            | value                                                           |
      | Application ID   | 2203658, 2203641, 2200679                                       |
      | Year             | 2025,2024,2023                                                  |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments |
      | Status           | IN PROGRESS, IN PROGRESS, SUBMITTED                             |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Application Name column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Applications page
    When I enter 'Domestic' in the search box
    Then I see the the correct list of Applications as follows
      | label            | value                                          |
      | Application ID   | 2203658,2203641                                |
      | Year             | 2025,2024                                      |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim |
      | Status           | IN PROGRESS, IN PROGRESS                       |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Applications as follows
      | label            | value                                                           |
      | Application ID   | 2203658, 2203641, 2200679                                       |
      | Year             | 2025,2024,2023                                                  |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments |
      | Status           | IN PROGRESS, IN PROGRESS, SUBMITTED                             |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Status column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Applications page
    When I enter 'SUBM' in the search box
    Then I see the the correct list of Applications as follows
      | label            | value           |
      | Application ID   | 2200679         |
      | Year             | 2023            |
      | Application Name | CO Rev Payments |
      | Status           | SUBMITTED       |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Applications as follows
      | label            | value                                                           |
      | Application ID   | 2203658, 2203641, 2200679                                       |
      | Year             | 2025,2024,2023                                                  |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments |
      | Status           | IN PROGRESS, IN PROGRESS, SUBMITTED                             |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Scheme column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Applications page
    When I enter 'PILLAR II' in the search box
    Then I see the the correct list of Applications as follows
      | label            | value           |
      | Application ID   | 2200679         |
      | Year             | 2023            |
      | Application Name | CO Rev Payments |
      | Status           | SUBMITTED       |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Applications as follows
      | label            | value                                                           |
      | Application ID   | 2203658, 2203641, 2200679                                       |
      | Year             | 2025,2024,2023                                                  |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments |
      | Status           | IN PROGRESS, IN PROGRESS, SUBMITTED                             |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Agreement References column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Applications page
    When I enter '65676' in the search box
    Then I see the the correct list of Applications as follows
      | label            | value                  |
      | Application ID   | 2203641                |
      | Year             | 2024                   |
      | Application Name | Domestic Capital Claim |
      | Status           | IN PROGRESS            |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Applications as follows
      | label            | value                                                           |
      | Application ID   | 2203658, 2203641, 2200679                                       |
      | Year             | 2025,2024,2023                                                  |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments |
      | Status           | IN PROGRESS, IN PROGRESS, SUBMITTED                             |

  @advanced @data-dependent
  Scenario: For a business with no Applications, a warning message is shown indicating that there are no Applications
    Given I have selected the business with SBI '0000000002'
    And I am on the Applications page
    Then I see the 'Applications' table is empty
    And the Applications details pane is empty
    And I see a warning message 'We didn't find any data to show at this time' under the 'Application Details' table

  @advanced @data-dependent
  Scenario: The Applications data is correct
    Given I have selected the business with SBI '0000000001'
    And I am on the Applications page
    And I have selected an application with the ID '2200679'
    Then I see the the correct list of Applications as follows
      | label            | value                                                           |
      | Application ID   | 2203658, 2203641, 2200679                                       |
      | Year             | 2025,2024,2023                                                  |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments |
      | Status           | IN PROGRESS, IN PROGRESS, SUBMITTED                             |
    And I see the correct data in the Application Details pane as follows
      | label                   | value                    |
      | Title                   | CO Rev Payments          |
      | Application ID          | 2200679                  |
      | Scheme                  | PILLAR II Payment Claims |
      | Year                    | 2023                     |
      | Status                  | SUBMITTED                |
      | Status (Portal)         | Application Created      |
      | Submitted Date          | 01/01/2015               |
      | Agreement References    | 4646483                  |
      | Last Movement           | RECEIVED CLAIM           |
      | Last Movement Date/Time | 05/09/2025 15:38:09      |
    And I see the correct data in the Movements History table as follows
      | label     | value                                                         |
      | Date/Time | 05/09/2025 15:38:09, 05/09/2024 16:76:09, 05/09/2024 15:38:09 |
      | Movement  | CREATE DRAFT APPLICATION, WITH CUSTOMER, RECEIVED CLAIM       |
      | Check     | PASSED, PASSED, PASSED                                        |

  @advanced @data-dependent
  Scenario: The “Movements History” table is ordered by date/time
    Given I have selected the business with SBI '0000000001'
    And I am on the Applications page
    And I have selected an application with the ID '2200679'
    And I see the correct data in the Movements History table ordered by date/time as follows
      | label     | value                                                         |
      | Date/Time | 05/09/2025 15:38:09, 05/09/2024 16:76:09, 05/09/2024 15:38:09 |
      | Movement  | CREATE DRAFT APPLICATION, WITH CUSTOMER, RECEIVED CLAIM       |
      | Check     | PASSED, PASSED, PASSED                                        |
