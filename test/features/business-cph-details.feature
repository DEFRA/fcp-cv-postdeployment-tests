Feature: Consolidated View CPH Details page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the CPH Details page
    Then I see a CPH table to the left with column headers for 'CPH number, Parish, Start Date, End Date'
    And the first row of the CPH table is selected
    And I see a search box
    And I see a CPH Details pane on the right with a title 'CPH Number: ' concatenated with CPH number
    And the CPH Details pane has fields for 'Parish, Start Date, End Date, Coordinates (x, y), Species, Address'
    And the CPH Details pane has the field data populated

  @intermediate
  Scenario: Selecting a new CPH updates the details in the right-hand pane
    Given I am on the CPH Details page
    When When I select a new CPH from the CPH Table
    Then the details in the right-hand side pane update

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the CPH number column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the CPH Details page
    When I enter '066' in the search box
    Then I see the the correct list of CPH's as follows
      | label      | value       |
      | CPH number | 01/066/0285 |
      | Parish     | TILBROOK    |
      | Start Date | 14/02/2006  |
      | End Date   | 31/12/9999  |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of CPH's as follows
      | label      | value                                              |
      | CPH number | 01/066/0285, 01/094/0042, 05/026/7008, 05/026/7008 |
      | Parish     | TILBROOK, STAPLOE, MANEA, CHEDDLETON               |
      | Start Date | 14/02/2006, 20/05/2013, 01/05/2007, 01/05/2008     |
      | End Date   | 31/12/9999, 29/09/2021, 12/08/2013, 12/08/2014     |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Parish column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the CPH Details page
    When I enter 'STAPLO' in the search box
    Then I see the the correct list of CPH's as follows
      | label      | value       |
      | CPH number | 01/094/0042 |
      | Parish     | STAPLOE     |
      | Start Date | 20/05/2013  |
      | End Date   | 29/09/2021  |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of CPH's as follows
      | label      | value                                              |
      | CPH number | 01/066/0285, 01/094/0042, 05/026/7008, 05/026/7008 |
      | Parish     | TILBROOK, STAPLOE, MANEA, CHEDDLETON               |
      | Start Date | 14/02/2006, 20/05/2013, 01/05/2007, 01/05/2008     |
      | End Date   | 31/12/9999, 29/09/2021, 12/08/2013, 12/08/2014     |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Species field filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the CPH Details page
    When I enter 'SHEEP' in the search box
    Then I see the the correct list of CPH's as follows
      | label      | value       |
      | CPH number | 01/094/0042 |
      | Parish     | STAPLOE     |
      | Start Date | 20/05/2013  |
      | End Date   | 29/09/2021  |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of CPH's as follows
      | label      | value                                              |
      | CPH number | 01/066/0285, 01/094/0042, 05/026/7008, 05/026/7008 |
      | Parish     | TILBROOK, STAPLOE, MANEA, CHEDDLETON               |
      | Start Date | 14/02/2006, 20/05/2013, 01/05/2007, 01/05/2008     |
      | End Date   | 31/12/9999, 29/09/2021, 12/08/2013, 12/08/2014     |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Address field filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the CPH Details page
    When I enter 'WORKSOP' in the search box
    Then I see the the correct list of CPH's as follows
      | label      | value       |
      | CPH number | 05/026/7008 |
      | Parish     | MANEA       |
      | Start Date | 01/05/2007  |
      | End Date   | 12/08/2013  |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of CPH's as follows
      | label      | value                                              |
      | CPH number | 01/066/0285, 01/094/0042, 05/026/7008, 05/026/7008 |
      | Parish     | TILBROOK, STAPLOE, MANEA, CHEDDLETON               |
      | Start Date | 14/02/2006, 20/05/2013, 01/05/2007, 01/05/2008     |
      | End Date   | 31/12/9999, 29/09/2021, 12/08/2013, 12/08/2014     |

  @advanced @data-dependent
  Scenario: The CPH table is ordered by CPH number, then start date
    Given I have selected the business with SBI '0000000001'
    And I am on the CPH Details page
    Then I see the the correctly ordered list of CPH's as follows
      | label      | value                                              |
      | CPH number | 01/066/0285, 01/094/0042, 05/026/7008, 05/026/7008 |
      | Parish     | TILBROOK, STAPLOE, MANEA, CHEDDLETON               |
      | Start Date | 14/02/2006, 20/05/2013, 01/05/2007, 01/05/2008     |
      | End Date   | 31/12/9999, 29/09/2021, 12/08/2013, 12/08/2014     |

  @advanced @data-dependent
  Scenario: If I select a business that has no CPH’s, a message is displayed in the table that indicates there are no CPH’s
    Given I have selected the business with SBI '0000000002'
    And I am on the CPH Details page
    Then I see an empty CPH table
    And I see an empty CPH Details pane
    And I see a warning message 'We didn't find any data to show at this time' under the 'CPH Details' table

  @advanced @data-dependent
  Scenario: Check CPH data correctness
    Given I have selected the business with SBI '0000000001'
    And I am on the CPH Details page
    Then I see the the correct list of CPH's as follows
      | label      | value                                              |
      | CPH number | 01/066/0285, 01/094/0042, 05/026/7008, 05/026/7008 |
      | Parish     | TILBROOK, STAPLOE, MANEA, CHEDDLETON               |
      | Start Date | 14/02/2006, 20/05/2013, 01/05/2007, 01/05/2008     |
      | End Date   | 31/12/9999, 29/09/2021, 12/08/2013, 12/08/2014     |
    When I select the CPH '01/094/0042'
    Then then I see the following CPH Details
      | label              | value                                         |
      | Title              | CPH Number: 01/094/0042                       |
      | Parish             | STAPLOE                                       |
      | Start Date         | 0/05/2013                                     |
      | End Date           | 29/09/2021                                    |
      | Coordinates (x, y) | "352075, 247411"                              |
      | Species            | CATTLE                                        |
      | Address            | Little Paddocks Paradise Green Marden HR1 3DW |
