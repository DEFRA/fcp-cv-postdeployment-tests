Feature: Consolidated View Agreements page

  @basic @possible-vi-test
  Scenario: Agreements page opens with correct components displayed.
    Given I am on the Agreements page
    Then I see an 'Agreements' table with column headers as follows 'Reference, Year, Agreement Name, Type, Start Date, End Date, Status'
    And each Agreements table has an option to view the record
    And I see a Search box

  @basic @possible-vi-test
  Scenario: Agreement Details page opens with correct components displayed.
    Given I am on the Agreements page
    When I click the 'View' link next to an agreement
    Then I see a header with 'Agreement Name' as the title
    And I see underneath the header the following fields 'Agreement Ref., Type, Scheme Year, Status, Start Date, End Date'
    And I see an 'payment schedules' table with column headers as follows 'Sheet, Parcel, Description, Action Area (ha), Action Length (m), Action Units, Parcel Area (ha), Payment Schedule, Commitment Term'
    And I see an option to go back to see the main screen with Agreements table

  @intermediate
  Scenario: The back arrow on the Agreement Details screen takes the user back to the main Agreements screen
    Given I am on the Agreement Details page
    When I click the 'Back to Agreements list' link
    Then I am on the Agreements page

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Reference column filters correctly
    Given I have selected the business with SBI '121428499'
    And I am on the Agreements page
    When I enter '786' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value                        |
      | Reference      | 8579482786                   |
      | Year           | 2025                         |
      | Agreement Name | BPS AGREEMENT                |
      | Type           | Countryside Stewardship (MT) |
      | Start Date     | 03/01/2023                   |
      | End Date       | 03/04/2026                   |
      | Status         | EXPIRED                      |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                        |
      | Reference      | 8579482786, 8097698033, 2617418139                                           |
      | Year           | 2025, 2025, 2024                                                             |
      | Agreement Name | BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT                                |
      | Type           | Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship |
      | Start Date     | 03/01/2023, 28/12/2024, 05/10/2022                                           |
      | End Date       | 03/04/2026, 22/08/2028, 14/09/2026                                           |
      | Status         | EXPIRED, WITHDRAWN, EXPIRED                                                  |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Year column filters correctly
    Given I have selected the business with SBI '121428499'
    And I am on the Agreements page
    When I enter '2024' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value               |
      | Reference      | 2617418139             |
      | Year           | 2025                |
      | Agreement Name | BPS AGREEMENT           |
      | Type           | Higher Level Stewardship |
      | Start Date     | 05/10/2022          |
      | End Date       | 14/09/2026          |
      | Status         | EXPIRED              |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                        |
      | Reference      | 8579482786, 8097698033, 2617418139                                           |
      | Year           | 2025, 2025, 2024                                                             |
      | Agreement Name | BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT                                |
      | Type           | Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship |
      | Start Date     | 03/01/2023, 28/12/2024, 05/10/2022                                           |
      | End Date       | 03/04/2026, 22/08/2028, 14/09/2026                                           |
      | Status         | EXPIRED, WITHDRAWN, EXPIRED                                                  |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Agreement Name column filters correctly
    Given I have selected the business with SBI '121428499'
    And I am on the Agreements page
    When I enter 'ELS' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value                |
      | Reference      | 8097698033           |
      | Year           | 2025                 |
      | Agreement Name | ELS AGREEMENT        |
      | Type           | Basic Payment Scheme |
      | Start Date     | 28/12/2024           |
      | End Date       | 022/08/2028          |
      | Status         | WITHDRAWN            |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                        |
      | Reference      | 8579482786, 8097698033, 2617418139                                           |
      | Year           | 2025, 2025, 2024                                                             |
      | Agreement Name | BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT                                |
      | Type           | Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship |
      | Start Date     | 03/01/2023, 28/12/2024, 05/10/2022                                           |
      | End Date       | 03/04/2026, 22/08/2028, 14/09/2026                                           |
      | Status         | EXPIRED, WITHDRAWN, EXPIRED                                                  |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Type column filters correctly
    Given I have selected the business with SBI '121428499'
    And I am on the Agreements page
    When I enter '(MT)' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value               |
      | Reference      | 8579482786             |
      | Year           | 2025                |
      | Agreement Name | BPS AGREEMENT         |
      | Type           | Countryside Stewardship (MT) |
      | Start Date     | 03/01/2023          |
      | End Date       | 03/04/2026          |
      | Status         | EXPIRED              |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                        |
      | Reference      | 8579482786, 8097698033, 2617418139                                           |
      | Year           | 2025, 2025, 2024                                                             |
      | Agreement Name | BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT                                |
      | Type           | Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship |
      | Start Date     | 03/01/2023, 28/12/2024, 05/10/2022                                           |
      | End Date       | 03/04/2026, 22/08/2028, 14/09/2026                                           |
      | Status         | EXPIRED, WITHDRAWN, EXPIRED                                                  |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Status column filters correctly
    Given I have selected the business with SBI '121428499'
    And I am on the Agreements page
    When I enter 'EXPIRED' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value                                    |
      | Reference      | 8579482786, 2617418139                         |
      | Year           | 2025, 2024                               |
      | Agreement Name | PS AGREEMENT, BPS AGREEMENT                   |
      | Type           | Countryside Stewardship (MT),Higher Level Stewardship |
      | Start Date     | 03/01/2023, 05/10/2022                   |
      | End Date       | 03/04/2026, 14/09/2026                   |
      | Status         | EXPIRED, EXPIRED                           |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                        |
      | Reference      | 8579482786, 8097698033, 2617418139                                           |
      | Year           | 2025, 2025, 2024                                                             |
      | Agreement Name | BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT                                |
      | Type           | Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship |
      | Start Date     | 03/01/2023, 28/12/2024, 05/10/2022                                           |
      | End Date       | 03/04/2026, 22/08/2028, 14/09/2026                                           |
      | Status         | EXPIRED, WITHDRAWN, EXPIRED                                                  |

  @advanced @data-dependent
  Scenario: For a business with no Agreements, a warning message is shown indicating that there are no Agreements
    Given I have selected the business with SBI '1000000000'
    And I am on the Agreements page
    Then I see the 'Agreements' table is empty
    And I see a warning message 'We didn't find any data to show at this time' under the 'Agreements' table

  @advanced @data-dependent
  Scenario: The Agreements table is ordered by Year, most recent first
    Given I have selected the business with SBI '121428499'
    And I am on the Agreements page
    Then I see the correct data in the Agreements table, ordered by most recent year first, as follows
      | label          | value                                                                        |
      | Reference      | 8579482786, 8097698033, 2617418139                                           |
      | Year           | 2025, 2025, 2024                                                             |
      | Agreement Name | BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT                                |
      | Type           | Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship |
      | Start Date     | 03/01/2023, 28/12/2024, 05/10/2022                                           |
      | End Date       | 03/04/2026, 22/08/2028, 14/09/2026                                           |
      | Status         | EXPIRED, WITHDRAWN, EXPIRED                                                  |

  @advanced @data-dependent
  Scenario: The Agreements data is correct including Action Area (ha) and Parcel Area (ha) calculated as ha as m2 divided by 10,000
    Given I have selected the business with SBI '121428499'
    And I am on the Agreements page
    Then I see the correct data in the Agreements table, ordered by most recent year first, as follows
      | label          | value                                                                        |
      | Reference      | 8579482786, 8097698033, 2617418139                                           |
      | Year           | 2025, 2025, 2024                                                             |
      | Agreement Name | BPS AGREEMENT,ELS AGREEMENT,BPS AGREEMENT                                    |
      | Type           | Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship |
      | Start Date     | 03/01/2023, 28/12/2024, 05/10/2022                                           |
      | End Date       | 03/04/2026, 22/08/2028, 14/09/2026                                           |
      | Status         | EXPIRED, WITHDRAWN, EXPIRED                                                  |
    When I click the 'View' link next to the agreement with reference '8579482786'
    Then I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending
      | label             | value                                                                                                                                                           |
      | Sheet             | HFUTNN, KQYCHH, SNXADR                                                                                                                                          |
      | Parcel            | 4704, 2883, 4847                                                                                                                                                |
      | Description       | Tondeo auctus adopto quas vociferor conicio solium. , Aduro attonbitus trans taceo asperiores vereor tempora. , Aveho desipio comis cubitum cui apostolus summa.|
      | Action Area (ha)  | 0.982, 1.2899, 2.1875                                                                                                                                           |
      | Action Length (m) | 43, null, null                                                                                                                                                  |
      | Action Units      | 7, 79, null                                                                                                                                                     |
      | Parcel Area (ha)  | 1.6975, 2.3073, 2.01                                                                                                                                            |
      | Payment Schedule  | 29/11/2023-21/09/2026, 18/07/2020-16/09/2026, 24/05/2021-07/08/2025                                                                                             |
      | Commitment Term   | 20/07/2019-25/01/2025, 11/08/2017-30/09/2028, 04/01/2022-17/05/2025                                                                                             |
    And The screen data for Action Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.
    And The screen data for Parcel Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.

  @advanced @data-dependent @require-mock-update
  Scenario: The Agreement Details table is ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending
    Given I have selected the business with SBI '121428499'
    And I am on the Agreements page
    When I click the 'View' link next to the agreement with reference '1980748'
    Then I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending
      | label             | value                                                                                                                               |
      | Sheet             | AA3261, AA3261, TL3261, TL3261, ZZ8877, ZZ8877                                                                                      |
      | Parcel            | 6780, 6781, 1234, 1234, 2134, 2134                                                                                                  |
      | Description       | CAHL1 - Pollen, CAHL1 - Pollen, SCR1 - Create Scrub, SCR2 - Create Scrub, PRF1 - Variable rate, PRF1 - Variable rate                |
      | Action Area (ha)  | 0.35, 12.5, 18.7, 1.6, 0, 0                                                                                                         |
      | Action Length (m) | null, null, null, null, null, 1                                                                                                     |
      | Action Units      | null, null, null, null, 730, null                                                                                                   |
      | Parcel Area (ha)  | 14.1629, 34.2854, 25.595,14.1629, 34.2854, 25.595                                                                                   |
      | Payment Schedule  | 01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2025-31/08/2026,01/09/2026-31/08/2027 |
      | Commitment Term   | 01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2025-31/08/2026,01/09/2026-31/08/2027 |
