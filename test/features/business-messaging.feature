Feature: Consolidated View Business Messages page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the Business Messages page
    Then I see the Contacts drop-down
    And I see a disabled Date Range drop-down
    And I see a disabled Show Read/Unread drop-down
    And I see a Search box

  @basic @possible-vi-test
  Scenario: Page updates correctly once a contact is selected.
    Given I am on the Business Messages page
    When I select a contact
    Then the Date Range field becomes active with options for 'Last 12 months, Last 24 months, Last 36 months, All'
    And the Show Read/Unread field becomes active with options for 'All, Read, Unread'
    And I see a Messages table with column headers for 'Status, Date, Subject'
    And the first message of the table is selected

  @basic @possible-vi-test
  Scenario: Message data updates correctly once a contact is selected.
    Given I am on the Business Messages page
    And I have selected a contact
    When I select a message
    Then the right-hand pane updates with a bold title, a Date field, a Read field, a Deleted field and a Message field
    And there is a label in the right-hand pane 'Links in the message below do not work'

  @advanced @data-dependent
  Scenario: Message data updates correctly once a contact is selected.
    Given I have selected the business with SBI '1106552449'
    And I am on the Business Messages page
    And I have selected the contact 'Catherine Pallister'
    When I select a message
    Then right-hand pane updates with the following information
      | label    | value                    |
      | Title    | my message subject       |
      | Date     | 01/01/2025               |
      | Read?    | Yes                      |
      | Deleted? | No                       |
      | Message  | my message contents blah |

  @advanced @data-dependent
  Scenario: Correct message is displayed when a contact has no messages for that business
    Given I have selected the business with SBI '1106552449'
    And I am on the Business Messages page
    When I select the contact 'Duncan Peacock'
    Then the Messages table is empty
    And a message is displayed 'There are no messages to display'

  @advanced @data-dependent
  Scenario: Contacts list is empty when a business has no contacts
    Given I have selected the business with SBI '236475237465'
    And I am on the Business Messages page
    Then the Contacts drop-down is empty

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Subject column filters correctly
    Given I have selected the business with SBI '1106552449'
    And I am on the Business Messages page
    And I have selected the contact 'Catherine Pallister'
    When I enter 'credit' in the search box
    Then I see the the correct list of messages as follows
      | label   | value                  |
      | Status  | Read                   |
      | Date    | 10/10/2023             |
      | Subject | Payment credit applied |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of messages as follows
      | label   | value                                                                                 |
      | Status  | Read, Read, Read, Unread                                                              |
      | Date    | 31/12/2025, 31/12/2024, 31/12/2023, 10/02/2009                                        |
      | Subject | "Payment credit applied", "Document approved", "Document rejected", "Document review" |

  @advanced @data-dependent
  Scenario: The list of contacts is correct.
    Given I have selected the business with SBI '1106552449'
    And I am on the Business Messages page
    Then the Contacts drop-down contains entires for 'Catherine Pallister, Duncan Peacock'

  @advanced @data-dependent @this-test-will-break-as-dates-get-out-of-sync
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
    Given I have selected the business with SBI '1106552449'
    And I am on the Business Messages page
    And I have selected the contact 'Catherine Pallister'
    When I select 'Read' from the Read-Unread filter
    Then I see the correct list of messages as follows
      | label   | value                                                              |
      | Status  | Read, Read, Read                                                   |
      | Date    | 31/12/2025, 31/12/2024, 31/12/2023                                 |
      | Subject | "Payment credit applied", "Document approved", "Document rejected" |
    When I select 'Unread' from the Read-Unread filter
    Then I see the correct list of messages as follows
      | label   | value              |
      | Status  | Unread             |
      | Date    | 10/02/2009         |
      | Subject | "Document review" |

  @advanced @data-dependent
  Scenario: Deleted message data displays correctly
    Given I have selected the business with SBI '1106552449'
    And I am on the Business Messages page
    And I have selected the contact 'Catherine Pallister'
    When I select the message with the subject 'Document approved'
    Then the Deleted field is 'true'
    When I select the message with the subject 'Document rejected'
    Then the Deleted field is 'false'
