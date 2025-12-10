Feature: Consolidated View Agreements page

  @basic @possible-vi-test
  Scenario: Agreements page opens with correct components displayed.
    Given I am on the Agreements page
    Then I see an Agreements table with the column headers as follows 'Reference, Year, Agreement Name, Type, Start Date, End Date, Status'
    And each Agreements table has an option to view the record
    And I see a Search box

  @basic @possible-vi-test
  Scenario: Agreement Details page opens with correct components displayed.
    Given I am on the Agreements page
    When I click the 'View' link next to an agreement
    Then I see a header with 'Agreement Name' as the title
    And I see underneath the header the following fields 'Agreement Ref., Type, Scheme Year, Status, Start Date, End Date'
    And I see a “payment schedules” table with the following column headers 'Sheet, Parcel, Description, Action Area (ha), Action Length (m), Action Units, Parcel Area (ha), Payment Schedule, Commitment Term'
    And I see an option to go back to see the main screen with Agreements table

  @intermediate
  Scenario: The back arrow on the Agreement Details screen takes the user back to the main Agreements screen
    Given I am on the Agreement Details page
    When I click the 'Back to Agreements list' link
    Then I am on the Agreements page

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Reference column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Agreements page
    When I enter '748' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value               |
      | Reference      | 1980748             |
      | Year           | 2025                |
      | Agreement Name | RSPB Arne           |
      | Type           | Combined Offer (CO) |
      | Start Date     | 01/09/2025          |
      | End Date       | 31/08/2030          |
      | Status         | SIGNED              |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                  |
      | Reference      | 1980748, 2047547, 2048517                                              |
      | Year           | 2025, 2024, 2023                                                       |
      | Agreement Name | RSPB Arne, Grange Farm, Dee Estuary                                    |
      | Type           | Combined Offer (CO), SFI Actions (SFIMT), Countryside Stewardship (HT) |
      | Start Date     | 01/09/2025, 02/10/2024, 03/11,2023                                     |
      | End Date       | 31/08/2030, 02/08/2028, 03/04/2031                                     |
      | Status         | SIGNED, SIGNED, IN PROGRESS                                            |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Year column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Agreements page
    When I enter '2025' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value               |
      | Reference      | 1980748             |
      | Year           | 2025                |
      | Agreement Name | RSPB Arne           |
      | Type           | Combined Offer (CO) |
      | Start Date     | 01/09/2025          |
      | End Date       | 31/08/2030          |
      | Status         | SIGNED              |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                  |
      | Reference      | 1980748, 2047547, 2048517                                              |
      | Year           | 2025, 2024, 2023                                                       |
      | Agreement Name | RSPB Arne, Grange Farm, Dee Estuary                                    |
      | Type           | Combined Offer (CO), SFI Actions (SFIMT), Countryside Stewardship (HT) |
      | Start Date     | 01/09/2025, 02/10/2024, 03/11,2023                                     |
      | End Date       | 31/08/2030, 02/08/2028, 03/04/2031                                     |
      | Status         | SIGNED, SIGNED, IN PROGRESS                                            |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Agreement Name column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Agreements page
    When I enter 'Grange' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value               |
      | Reference      | 2047547             |
      | Year           | 2024                |
      | Agreement Name | Grange Farm         |
      | Type           | SFI Actions (SFIMT) |
      | Start Date     | 02/10/2024          |
      | End Date       | 02/08/2028          |
      | Status         | SIGNED              |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                  |
      | Reference      | 1980748, 2047547, 2048517                                              |
      | Year           | 2025, 2024, 2023                                                       |
      | Agreement Name | RSPB Arne, Grange Farm, Dee Estuary                                    |
      | Type           | Combined Offer (CO), SFI Actions (SFIMT), Countryside Stewardship (HT) |
      | Start Date     | 01/09/2025, 02/10/2024, 03/11,2023                                     |
      | End Date       | 31/08/2030, 02/08/2028, 03/04/2031                                     |
      | Status         | SIGNED, SIGNED, IN PROGRESS                                            |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Type column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Agreements page
    When I enter 'SFMIT' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value               |
      | Reference      | 2047547             |
      | Year           | 2024                |
      | Agreement Name | Grange Farm         |
      | Type           | SFI Actions (SFIMT) |
      | Start Date     | 02/10/2024          |
      | End Date       | 02/08/2028          |
      | Status         | SIGNED              |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                  |
      | Reference      | 1980748, 2047547, 2048517                                              |
      | Year           | 2025, 2024, 2023                                                       |
      | Agreement Name | RSPB Arne, Grange Farm, Dee Estuary                                    |
      | Type           | Combined Offer (CO), SFI Actions (SFIMT), Countryside Stewardship (HT) |
      | Start Date     | 01/09/2025, 02/10/2024, 03/11,2023                                     |
      | End Date       | 31/08/2030, 02/08/2028, 03/04/2031                                     |
      | Status         | SIGNED, SIGNED, IN PROGRESS                                            |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Status column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Agreements page
    When I enter 'SIGNED' in the search box
    Then I see the the correct list of Agreements as follows
      | label          | value                                    |
      | Reference      | 1980748, 2047547                         |
      | Year           | 2025, 2024                               |
      | Agreement Name | RSPB Arne, Grange Farm                   |
      | Type           | Combined Offer (CO), SFI Actions (SFIMT) |
      | Start Date     | 01/09/2025, 02/10/2024                   |
      | End Date       | 31/08/2030, 02/08/2028                   |
      | Status         | SIGNED, SIGNED                           |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of Agreements as follows
      | label          | value                                                                  |
      | Reference      | 1980748, 2047547, 2048517                                              |
      | Year           | 2025, 2024, 2023                                                       |
      | Agreement Name | RSPB Arne, Grange Farm, Dee Estuary                                    |
      | Type           | Combined Offer (CO), SFI Actions (SFIMT), Countryside Stewardship (HT) |
      | Start Date     | 01/09/2025, 02/10/2024, 03/11,2023                                     |
      | End Date       | 31/08/2030, 02/08/2028, 03/04/2031                                     |
      | Status         | SIGNED, SIGNED, IN PROGRESS                                            |

  @advanced @data-dependent
  Scenario: For a business with no Agreements, a warning message is shown indicating that there are no Agreements
    Given I have selected the business with SBI '0000000002'
    And I am on the Agreements page
    Then The agreements table is empty
    And a label is shown with the text 'We didn't find any data to show at this time'

  @advanced @data-dependent
  Scenario: The Agreements table is ordered by Year, most recent first
    Given I have selected the business with SBI '0000000001'
    And I am on the Agreements page
    Then I see the correct data in the Agreements table, ordered by most recent year first, as follows
      | label          | value                                                                  |
      | Reference      | 1980748, 2047547, 2048517                                              |
      | Year           | 2025, 2024, 2023                                                       |
      | Agreement Name | RSPB Arne, Grange Farm, Dee Estuary                                    |
      | Type           | Combined Offer (CO), SFI Actions (SFIMT), Countryside Stewardship (HT) |
      | Start Date     | 01/09/2025, 02/10/2024, 03/11,2023                                     |
      | End Date       | 31/08/2030, 02/08/2028, 03/04/2031                                     |
      | Status         | SIGNED, SIGNED, IN PROGRESS                                            |

  @advanced @data-dependent
  Scenario: The Agreements data is correct including Action Area (ha) and Parcel Area (ha) calculated as ha as m2 divided by 10,000
    Given I have selected the business with SBI '0000000001'
    And I am on the Agreements page
    Then I see the correct data in the Agreements table, ordered by most recent year first, as follows
      | label          | value                                                                  |
      | Reference      | 1980748, 2047547, 2048517                                              |
      | Year           | 2025, 2024, 2023                                                       |
      | Agreement Name | RSPB Arne, Grange Farm, Dee Estuary                                    |
      | Type           | Combined Offer (CO), SFI Actions (SFIMT), Countryside Stewardship (HT) |
      | Start Date     | 01/09/2025, 02/10/2024, 03/11,2023                                     |
      | End Date       | 31/08/2030, 02/08/2028, 03/04/2031                                     |
      | Status         | SIGNED, SIGNED, IN PROGRESS                                            |
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

    And The screen data for Action Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.
    And The screen data for Parcel Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.

  @advanced @data-dependent
  Scenario: The Agreement Details table is ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending
    Given I have selected the business with SBI '0000000001'
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
