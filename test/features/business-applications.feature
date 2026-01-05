Feature: Consolidated View Applications page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the Applications page
    Then I see an 'Applications' table with column headers as follows 'Application ID, Year, Application Name, Status'
    And the first item of the 'Applications' table is selected
    And I see a search box
    And there is an Application Details pane on the right-hand pane
    And the Application Details pane has a title corresponding to the 'Application Name' field of the selected application
    And the Application Details pane has fields for 'Application ID, Scheme, Year, Status, Status (Portal), Submitted Date, Agreement References, Last Movement, Last Movement Date/Time'
    And the Application Details pane has a Movement History section
    And I see a 'Movements History' table with column headers as follows 'Date/Time, Movement, Check'

  @advanced @data-dependent @require-mock-update
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

  @advanced @data-dependent @require-mock-update
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

  @advanced @data-dependent @require-mock-update
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

  @advanced @data-dependent @require-mock-update
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

  @advanced @data-dependent @require-mock-update
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

  @advanced @data-dependent @require-mock-update
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
    Given I have selected the business with SBI '1000000000'
    And I am on the Applications page
    Then I see the 'Applications' table is empty
    And the Applications details pane is empty
    And I see a warning message 'We didn't find any data to show at this time' under the 'Application Details' table

  @advanced @data-dependent
  Scenario: The Applications data is correct
    Given I have selected the business with SBI '106238988'
    And I am on the Applications page
    And I have selected an application with the ID '9098148058'
    Then I see the correct data in the Application Details pane as follows
      | label                   | value                                                       |
      | Title                   | SOLITO ABSQUE DECET DEMONSTRO REPREHENDERIT VIA SOLLERS UBI |
      | Application ID          | 9098148058                                                  |
      | Scheme                  | BIS DERIPIO SUFFICIO SUPPELLEX VILICUS                      |
      | Year                    | 2022                                                        |
      | Status                  | DELETED                                                     |
      | Status (Portal)         | ...                                                         |
      | Submitted Date          | 31/12/2022 03:33:24                                         |
      | Agreement References    | 9190356161                                                  |
      | Last Movement           | CREATE DRAFT APPLICATION                                    |
      | Last Movement Date/Time | 31/12/2022 07:15:25                                         |
    And I see the correct data in the Movements History table as follows
      | label     | value                                                         |
      | Date/Time | 31/12/2022 07:15:25, 31/12/2022 21:03:16, 31/12/2022 02:09:35 |
      | Movement  | CREATE DRAFT APPLICATION,DELETE, CREATION                     |
      | Check     | PASSED, PASSED, NOT PASSED                                    |

  @advanced @data-dependent
  Scenario: The “Movements History” table is ordered by date/time
    Given I have selected the business with SBI '106238988'
    And I am on the Applications page
    And I have selected an application with the ID '1890586021'
    And I see the correct data in the Movements History table ordered by date/time as follows
      | label     | value                                                                                                   |
      | Date/Time | 31/12/2022 21:30:55, 31/12/2022 13:21:28, 31/12/2022 11:41:13, 31/12/2022 08:15:03, 31/12/2022 05:50:06 |
      | Movement  | UPDATE, UPDATE, CREATION, UPDATE, UPDATE                                                                |
      | Check     | PASSED, PASSED, PASSED, PASSED, PASSED                                                                  |
