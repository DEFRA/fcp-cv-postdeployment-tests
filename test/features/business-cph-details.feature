Feature: Consolidated View CPH Details page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I have gone to the CPH Details page
    Then I see an 'CPH' table with column headers as follows 'CPH number, Parish, Start Date, End Date'
    And the first item of the 'CPH' table is selected
    And I see a search box
    And I see a CPH Details pane on the right with a title 'CPH Number: ' concatenated with CPH number
    And the CPH Details pane has fields for 'Parish, Start Date, End Date, Coordinates (x, y), Species, Address'
    And the CPH Details pane has the field data populated

  @intermediate
  Scenario: Selecting a new CPH updates the details in the right-hand pane
    Given I have gone to the CPH Details page
    When When I select a new CPH from the CPH Table
    Then the details in the right-hand side pane update

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the CPH number column filters correctly
    Given I have selected the business with SBI '107183280'
    And I am on the CPH Details page
    When I enter '691' in the search box
    Then I see the the correct list of CPHs as follows
      | label      | value       |
      | CPH number | 04/691/1023 |
      | Parish     | Pettistree  |
      | Start Date | 05/10/2024  |
      | End Date   | 25/05/2027  |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of CPHs as follows
      | label      | value                                                                                                                                 |
      | CPH number | 04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737                                |
      | Parish     | Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme |
      | Start Date | 05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023                            |
      | End Date   | 25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023                                        |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Parish column filters correctly
    Given I have selected the business with SBI '107183280'
    And I am on the CPH Details page
    When I enter 'Charl' in the search box
    Then I see the the correct list of CPHs as follows
      | label      | value       |
      | CPH number | 14/434/2708 |
      | Parish     | Charlton       |
      | Start Date | 09/02/2024  |
      | End Date   | 31/12/9999  |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of CPHs as follows
      | label      | value                                                                                                                                 |
      | CPH number | 04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737                                |
      | Parish     | Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme |
      | Start Date | 05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023                            |
      | End Date   | 25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023                                        |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Species field filters correctly
    Given I have selected the business with SBI '107183280'
    And I am on the CPH Details page
    When I enter 'SHEEP' in the search box
    Then I see the the correct list of CPHs as follows
      | label      | value                                           |
      | CPH number | 04/691/1023, 20/213/7336, 55/721/0654           |
      | Parish     | Pettistree, Upton-upon-Severn, East Chiltington |
      | Start Date | 05/10/2024, 14/08/2022, 06/11/2022  |
      | End Date   | 25/05/2027, 23/12/2025, 22/09/2024  |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of CPHs as follows
      | label      | value                                                                                                                                 |
      | CPH number | 04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737                                |
      | Parish     | Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme |
      | Start Date | 05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023                            |
      | End Date   | 25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023                                        |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Address field filters correctly
    Given I have selected the business with SBI '107183280'
    And I am on the CPH Details page
    When I enter 'DEMUM' in the search box
    Then I see the the correct list of CPHs as follows
      | label      | value       |
      | CPH number | 04/691/1023 |
      | Parish     | Pettistree  |
      | Start Date | 05/10/2024  |
      | End Date   | 25/05/2027  |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of CPHs as follows
      | label      | value                                                                                                                                 |
      | CPH number | 04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737                                |
      | Parish     | Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme |
      | Start Date | 05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023                            |
      | End Date   | 25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023                                        |

  @advanced @data-dependent @require-mock-update
  Scenario: The CPH table is ordered by CPH number, then start date
    Given I have selected the business with SBI '107183280'
    And I am on the CPH Details page
    Then I see the the correctly ordered list of CPHs as follows
      | label      | value                                                                                                                                 |
      | CPH number | 04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737                                |
      | Parish     | Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme |
      | Start Date | 05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023                            |
      | End Date   | 25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023                                        |

  @advanced @data-dependent
  Scenario: If I select a business that has no CPH’s, a message is displayed in the table that indicates there are no CPH’s
    Given I have selected the business with SBI '1000000000'
    And I am on the CPH Details page
    Then I see the 'CPH table' table is empty
    And I see an empty CPH Details pane
    And I see a warning message 'We didn't find any data to show at this time' under the 'CPH Details' table

  @advanced @data-dependent
  Scenario: Check CPH data correctness
    Given I have selected the business with SBI '107183280'
    And I am on the CPH Details page
    Then I see the the correct list of CPHs as follows
      | label      | value                                                                                                                                 |
      | CPH number | 04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737                                |
      | Parish     | Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme |
      | Start Date | 05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023                            |
      | End Date   | 25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023                                        |
    When I select the CPH '20/213/7336'
    Then then I see the following CPH Details
      | label              | value                                                                 |
      | Title              | CPH Number: 20/213/7336                                               |
      | Parish             | Upton-upon-Severn                                                     |
      | Start Date         | 14/08/2022                                                            |
      | End Date           | 23/12/2025                                                            |
      | Coordinates (x, y) | "176949, 434894"                                                      |
      | Species            | PIG(S),CAMELIDS,POULTRY,OTHER,PIGEONS,CATTLE,GOAT(S),SHEEP            |
      | Address            | "TANTILLUS CATTUS CONDICO FARM, HERZOG WYND, UPPER SCHILLER, KF0 5GZ" |
