Feature: Consolidated View Business Linked Contacts page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the Contacts Linked Businesses page
    Then I see a Search box
    And I see an 'Contacts' table with column headers as follows 'CRN, First Name, Last Name' in a left-hand side pane
    And the first item of the 'Contacts' table is selected
    And I see a title in bold of the first name and second name of the contact concatenated in the right-hand side pane
    And I see fields for 'CRN, Full Name, Role' in the right-hand side pane
    And I see a 'View customer' button in the right-hand side pane
    And I see a 'View Authenticate Questions' link in the right-hand side pane
    And I see an 'Permissions' table with column headers as follows 'Permission, Level' in the right-hand side pane
    And the first item of the 'Permission' table is selected
    And I see an 'Permission Description' table with column headers as follows 'Permission Description'
    And the first item of the 'Permission Description' table is selected

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
    And I see an 'Authentication Information' table with column headers as follows 'Menorable Date, Memorable Event, Memorable Place, Updated Date'

  @intermediate @data-dependent
  Scenario: Clicking the View customer button navigates the user to the relevant Contacts page in CRM.
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    And I have selected the contact with the CRN '1103969349' from the Contacts table
    When I click the View customer button
    Then I see the CRM Contact Details page for the contact with the CRN '1103969349'

  @advanced @data-dependent
  Scenario: On clicking on a customer, information is shown correctly
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    When I select the contact with the CRN '1103020285' from the Contacts table
    Then the page updates to show the following information
      | label                   | value                                                                                                                                                                                    |
      | Title                   | Merl Kemmer                                                                                                                                                                              |
      | CRN                     | 1103020285                                                                                                                                                                               |
      | Full Name               | Mr. Merl Elody Kemmer                                                                                                                                                                    |
      | Role                    | Business Partner                                                                                                                                                                         |
      | Permissions             | BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS |
      | Permissions Levels      | SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND                                                                                                                            |
      | Permission Descriptions | View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim         |

  @advanced @data-dependent
  Scenario: On clicking on a Permission, the Permission Description table updates correctly
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    When I select the Permission 'ENTITLEMENTS' from the Permission table
    Then the Permission Description table updates with the following descriptions 'View entitlements, Transfer entitlements, Apply for new entitlements'

  @advanced @data-dependent
  Scenario: On clicking on a contact, information is shown correctly
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    When I select the contact with the CRN '1103969349' from the Contacts table
    Then the page updates to show the following information
      | label                   | value                                                                                                                                                                                    |
      | Title                   | Velma Deckow                                                                                                                                                                             |
      | CRN                     | 1103969349                                                                                                                                                                               |
      | Full Name               | Miss Velma Lavern Deckow                                                                                                                                                                  |
      | Role                    | Business Partner                                                                                                                                                                         |
      | Permissions             | BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS |
      | Permissions Levels      | SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND                                                                                                                            |
      | Permission Descriptions | View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim         |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the CRN column filters correctly
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    When I enter '3020' in the search box
    Then I see the the correct list of contacts as follows
      | label      | value      |
      | CRN        | 1103020285 |
      | First Name | Merl       |
      | Last Name  | Kemmer     |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of contacts as follows
      | label      | value                 |
      | CRN        | 1103020285,1103969349 |
      | First Name | Merl,Velma            |
      | Last Name  | Kemmer,Deckow         |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the First Name column filters correctly
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    When I enter 'elm' in the search box
    Then I see the the correct list of contacts as follows
      | label      | value      |
      | CRN        | 1103969349 |
      | First Name | Velma      |
      | Last Name  | Deckow     |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of contacts as follows
      | label      | value                 |
      | CRN        | 1103020285,1103969349 |
      | First Name | Merl,Velma            |
      | Last Name  | Kemmer,Deckow         |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Last Name column filters correctly
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    When I enter 'emm' in the search box
    Then I see the the correct list of contacts as follows
      | label      | value      |
      | CRN        | 1103020285 |
      | First Name | Merl       |
      | Last Name  | Kemmer     |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of contacts as follows
      | label      | value                 |
      | CRN        | 1103020285,1103969349 |
      | First Name | Merl,Velma            |
      | Last Name  | Kemmer,Deckow         |

  @advanced @data-dependent
  Scenario: Clicking the 'View Authenticate Questions' link displays a the correct information in the Contacts Authentication sub-screen
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    And I have selected the contact with the CRN '1103020285' from the Contacts table
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
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    Then I see the the correct list of contacts as follows
      | label      | value                 |
      | CRN        | 1103020285,1103969349 |
      | First Name | Merl,Velma            |
      | Last Name  | Kemmer,Deckow         |

  @advanced @data-dependent
  Scenario: A contact with no contacts is shown without error
    Given I have selected the business with SBI '1000000000'
    And I am on the Business Linked Contacts page
    Then I see the 'Contacts' table is empty

  @advanced @data-dependent
  Scenario: When a contact's permission is NOT level "NO_ACCESS", the Permission Description list is correct.
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    And I have selected the contact with the CRN '1103969349' from the Contacts table
    And I select the Permission 'BASIC_PAYMENT_SCHEME' from the Permission table
    Then I see the Permission Description table with 'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'

  @advanced @data-dependent
  Scenario: When a contact has no first name, data is displayed correctly on the Linked Contacts screen
    Given I have selected the business with SBI '3333333333'
    And I am on the Business Linked Contacts page
    And I select the contact with the CRN '1111111901' from the Contacts table
    Then I see the the correct list of contacts as follows
      | label      | value      |
      | CRN        | 1111111901 |
      | First Name |            |
      | Last Name  | Grey       |
    And the page updates to show the following information
      | label                   | value                                                                                                                                                                                    |
      | Title                   | Lady Grey                                                                                                                                                                             |
      | CRN                     | 1111111901                                                                                                                                                                               |
      | Full Name               | Lady Grey                                                                                                                                                                 |
      | Role                    | Business Partner                                                                                                                                                                         |
      | Permissions             | BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS |
      | Permissions Levels      | SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND                                                                                                                            |
      | Permission Descriptions | View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim         |

  @advanced @data-dependent @require-mock-update
  Scenario: When a contact's permission is level "NO_ACCESS", the Permission Description list shows the correct warning message "We didn't find any data to show at this time".
    Given I have selected the business with SBI '0000000001'
    And I am on the Business Linked Contacts page
    And I have selected the contact with the CRN '1103020888' from the Contacts table
    And I select the Permission 'LAND_DETAILS' from the Permission table
    Then I see the 'Permission Description' table is empty
    And I see a warning message 'We didn't find any data to show at this time' under the 'Permission Description' table

