Feature: Consolidated View Business Linked Contacts page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the Contacts Linked Businesses page
    Then I see a Search box
    And I see a Contacts table in a left hand side pane with column headers 'CRN, First Name, Last Name' in a left-hand side pane
    And the first item of the Contacts table is selected
    And I see a title in bold of the first name and second name of the contact concatenated in the right-hand side pane
    And I see fields for 'CRN, Full Name, Role' in the right-hand side pane
    And I see a 'View customer' button in the right-hand side pane
    And I see a 'View Authenticate Questions' link in the right-hand side pane
    And I see a table with column headers for 'Permission, Level' in the right-hand side pane
    And the first item of the Permission table is selected
    And I see a table with column headers for 'Permission Description' in the right-hand side pane
    And the first item of the Permission Description table is selected

  @intermediate @possible-vi-test
  Scenario: Clicking the 'View Authenticate Questions' link displays a Contacts Authentication sub-screen
    Given I am on the Business Linked Contacts page
    When 'View Authenticate Questions' link
    Then I see the Contacts Authentication sub-screen
    And a title in bold
    And a CRN field
    And a Full Name field
    And a Role field
    And a Date of Birth field
    And an Authentication Information table with column headers for 'Menorable Date, Memorable Event, Memorable Place, Updated Date'

  @intermediate @data-dependent
  Scenario: Clicking the View customer button navigates the user to the relevant Contacts page in CRM.
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    And I have selected the contact with the CRN '1103020888' from the Contacts table
    When I click the View customer button
    Then I see the CRM Contact Details page for the contact with the CRN '1103020888'

  @advanced @data-dependent
  Scenario: On clicking on a customer, information is shown correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    When I select the contact with the CRN '0000000123' from the Contacts table
    Then the page updates to show the following information
      | label                   | value                                                       |
      | Title                   | Merl Kemmer                                                 |
      | CRN                     | 0000000123                                                  |
      | Full Name               | Mr Merl Elody Kemmer                                        |
      | Role                    | Business Partner                                            |
      | Permissions             | BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS                      |
      | Permissions Levels      | SUBMIT, FULL_PERMISSION                                     |
      | Permission Descriptions | View business summary, View claims, Create and edit a claim |

  @advanced @data-dependent
  Scenario: On clicking on a Permission, the Permission Description table updates correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    When I select the Permission 'ENTITLEMENTS' from the Permission table
    Then the Permission Description table updates with the following descriptions 'View entitlements, Transfer entitlements, Apply for new entitlements'

  @advanced @data-dependent
  Scenario: On clicking on a contact, information is shown correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    When I select the contact with the CRN '1103020888' from the Contacts table
    Then the page updates to show the following information
      | label                   | value                                                       |
      | Title                   | Harry Mahoney                                               |
      | CRN                     | 1103020888                                                  |
      | Full Name               | Mr Harry Clark Mahoney                                      |
      | Role                    | Business Partner                                            |
      | Permissions             | BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS                      |
      | Permissions Levels      | SUBMIT, FULL_PERMISSION                                     |
      | Permission Descriptions | View business summary, View claims, Create and edit a claim |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the CRN column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    When I enter '0888' in the search box
    Then I see the the correct list of contacts as follows
      | label      | value     |
      | CRN        | 121428499 |
      | First Name | Harry     |
      | Last Name  | Mahoney   |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of contacts as follows
      | label      | value                 |
      | CRN        | 0000000123, 121428499 |
      | First Name | Merl, Harry           |
      | Last Name  | Kemmer, Mahoney       |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the First Name column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    When I enter 'har' in the search box
    Then I see the the correct list of contacts as follows
      | label      | value     |
      | CRN        | 121428499 |
      | First Name | Harry     |
      | Last Name  | Mahoney   |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of contacts as follows
      | label      | value                 |
      | CRN        | 0000000123, 121428499 |
      | First Name | Merl, Harry           |
      | Last Name  | Kemmer, Mahoney       |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Last Name column filters correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    When I enter 'mah' in the search box
    Then I see the the correct list of contacts as follows
      | label      | value      |
      | CRN        | 0000000123 |
      | First Name | Merl       |
      | Last Name  | Kemmer     |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of contacts as follows
      | label      | value                 |
      | CRN        | 0000000123, 121428499 |
      | First Name | Merl, Harry           |
      | Last Name  | Kemmer, Mahoney       |

  @advanced @data-dependent
  Scenario: Clicking the 'View Authenticate Questions' link displays a the correct information in the Contacts Authentication sub-screen
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    And I have selected the contact with the CRN '0000000123' from the Contacts table
    When 'View Authenticate Questions' link
    Then I see the Contacts Authentication sub-screen with the following information
      | label           | value                |
      | Title           | 0000000123           |
      | Full Name       | Mr Merl Elody Kemmer |
      | Role            | Business Partner     |
      | Date of Birth   | 07/01/1963           |
      | Memorable Date  | 01/02/2003           |
      | Memorable Event | Bar Mitzvah          |
      | Memorable Place | Vegas                |
      | Updated Date    | 01/01/2025           |

  @advanced @data-dependent
  Scenario: The correct Linked Contacts are shown for a business
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    Then I see the the correct list of contacts as follows
      | label      | value                 |
      | CRN        | 0000000123, 121428499 |
      | First Name | Merl, Harry           |
      | Last Name  | Kemmer, Mahoney       |

  @advanced @data-dependent
  Scenario: A contact with no contacts is shown without error
    Given I have selected the business with SBI '0000000002'
    And I am on the Business Linked Contacts page
    Then the Contacts table is empty

  @advanced @data-dependent
  Scenario: When a contact's permission is NOT level "NO_ACCESS", the Permission Description list is correct.
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    And I have selected the contact with the CRN '1103020888' from the Contacts table
    And I select 'BASIC_PAYMENT_SCHEME' from the Permissions table
    Then I see the Permission Description table with 'SUBMIT, FULL_PERMISSION'

  @advanced @data-dependent
  Scenario: When a contact's permission is level "NO_ACCESS", the Permission Description list shows the correct warning message "We didn't find any data to show at this time".
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    And I have selected the contact with the CRN '1103020888' from the Contacts table
    And I select 'LAND_DETAILS' from the Permissions table
    Then the Permission Description table is empty
    And I see a warning message 'We didn't find any data to show at this time' under the 'Permission Description' table
