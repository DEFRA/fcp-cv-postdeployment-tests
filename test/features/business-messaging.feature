Feature: Consolidated View Business Messages page

  @basic @possible-vi-test
  Scenario: Message data updates correctly once a contact is selected.
    Given I have gone to the Business Messages page
    And I select a contact
    When I select the first message
    Then the right-hand pane updates with a bold title, a Date field, a Read field, a Deleted field and a Message field
    And there is a label in the right-hand pane 'Links in the message below do not work'

  @advanced @data-dependent
  Scenario: Message data updates correctly after another contact is selected.
    Given I have selected the business with SBI '1111111111'
    And I am on the Business Messages page
    And I have selected the contact 'Vilma Yundt'
    When I select the message with the subject 'Agnosco cohaero ancilla.  '
    Then right-hand pane updates with the following information
      | label    | value                                                           |
      | Title    | Agnosco cohaero ancilla.                                        |
      | Date     | 1723577035401                                                   |
      | Read?    | No                                                              |
      | Deleted? | No                                                              |
      | Message  | <p>Talis cubicularis thesis cohors venia deleo tam claudeo.</p> |

  @advanced @data-dependent @require-mock-update
  Scenario: Correct message is displayed when a contact has no messages for that business
    Given I have selected the business with SBI '1106552449'
    And I am on the Business Messages page
    When I have selected the contact 'Duncan Peacock'
    Then I see the 'Messages' table is empty
    And I see a warning message 'There are no messages to display' under the 'Messages' table

  @advanced @data-dependent
  Scenario: Contacts list is empty when a business has no contacts
    Given I have selected the business with SBI '1000000000'
    And I am on the Business Messages page
    Then the Contacts drop-down is empty

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Subject column filters correctly
    Given I have selected the business with SBI '1111111111'
    And I am on the Business Messages page
    And I have selected the contact 'Vilma Yundt'
    When I enter 'anci' in the search box
    Then I see the the correct list of messages as follows
      | label   | value                      |
      | Status  | Unread                     |
      | Date    | 1723577035401              |
      | Subject | "Agnosco cohaero ancilla." |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of messages as follows
      | label   | value                                                                                                                  |
      | Status  | Unread, Unread, Read, Unread                                                                                           |
      | Date    | 1723577035401, 1717810388400, 1700229203688, 1726822799905                                                             |
      | Subject | "Agnosco cohaero ancilla.", "Vivo quae ultra caste.", "Triumphus facilis aiunt.", "Facilis beatae vesper copia velit." |

  @advanced @data-dependent
  Scenario: The list of contacts is correct.
    Given I have selected the business with SBI '1111111111'
    And I am on the Business Messages page
    Then the Contacts drop-down contains entries for 'Lauren Sanford,Terry Swaniawski,Murray Kihn,Meaghan Torp,Kristy Stiedemann,Juwan Hahn,Rod Quitzon-Gibson,Stacey Willms,Marco Kovacek,Frederic Koch-Cassin,Nayeli Kub,Vilma Yundt,Henri Weissnat,Mara Stark,Kellie Flatley'

  @advanced @data-dependent @this-test-will-break-as-dates-get-out-of-sync @require-mock-update
  Scenario: The message date filter works correctly.
    Given I have selected the business with SBI '1106552449'
    And I am on the Business Messages page
    And I have selected the contact 'Catherine Pallister'
    When I select the Date Range field as 'Last 12 months'
    Then I see the correct list of messages as follows
      | label   | value                    |
      | Status  | Read                     |
      | Date    | 31/12/2025               |
      | Subject | "Payment credit applied" |
    When I select the Date Range field as 'Last 24 months'
    Then I see the correct list of messages as follows
      | label   | value                                         |
      | Status  | Read, Read                                    |
      | Date    | 31/12/2025, 31/12/2024                        |
      | Subject | "Payment credit applied", "Document approved" |
    When I select the Date Range field as 'Last 36 months'
    Then I see the correct list of messages as follows
      | label   | value                                                              |
      | Status  | Read, Read, Read                                                   |
      | Date    | 31/12/2025, 31/12/2024, 31/12/2023                                 |
      | Subject | "Payment credit applied", "Document approved", "Document rejected" |
    When I select the Date Range field as 'All'
    Then I see the correct list of messages as follows
      | label   | value                                                                                 |
      | Status  | Read, Read, Read, Unread                                                              |
      | Date    | 31/12/2025, 31/12/2024, 31/12/2023, 10/02/2009                                        |
      | Subject | "Payment credit applied", "Document approved", "Document rejected", "Document review" |

  @advanced @data-dependent
  Scenario: The Read-Unread message filter works correctly
    Given I have selected the business with SBI '1111111111'
    And I am on the Business Messages page
    And I have selected the contact 'Vilma Yundt'
    When I select 'Read' from the Read-Unread filter
    Then I see the correct list of messages as follows
      | label   | value                      |
      | Status  | Read                       |
      | Date    | 1700229203688              |
      | Subject | "Triumphus facilis aiunt." |
    When I select 'Unread' from the Read-Unread filter
    Then I see the correct list of messages as follows
      | label   | value                                                                                      |
      | Status  | Unread, Unread, Unread                                                                     |
      | Date    | 1723577035401, 1717810388400, 1726822799905                                                |
      | Subject | "Agnosco cohaero ancilla.", "Vivo quae ultra caste.", "Facilis beatae vesper copia velit." |

  @advanced @data-dependent @require-mock-update
  Scenario: Deleted message data displays correctly
    Given I have selected the business with SBI '1111111111'
    And I am on the Business Messages page
    And I have selected the contact 'Vilma Yundt'
    When I select the message with the subject 'THIS IS NOT CURRENTLY AVAILABLE'
    Then the Deleted field is 'true'
    When I select the message with the subject 'Agnosco cohaero ancilla.  '
    Then the Deleted field is 'false'
