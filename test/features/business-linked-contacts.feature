Feature: Consolidated View Business Linked Contacts page

  @intermediate @data-dependent
  Scenario: Clicking the View customer button navigates the user to the relevant Contacts page in CRM.
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    And I select the contact with the CRN '1103969349' from the Contacts table
    When I click the View customer button
    Then I see the CRM Contact Details page for the contact with the CRN '1103969349'

  @advanced @data-dependent
  Scenario: On clicking on a customer, information is shown correctly
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    When I select the contact with the CRN '1103020285' from the Contacts table
    Then the LinkedContacts page updates to show the following information
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
    Then the LinkedContacts Permission Description table updates with the following descriptions 'View entitlements, Transfer entitlements, Apply for new entitlements'

  @advanced @data-dependent
  Scenario: On clicking on a contact, information is shown correctly
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    When I select the contact with the CRN '1103969349' from the Contacts table
    Then the LinkedContacts page updates to show the following information
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
  Scenario: Searching for a string that returns no results results in a warning message
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    When I enter '1-2-3-a-b-c' in the search box
    Then I see a warning 'There are no linked contacts for the search criteria entered'

  @advanced @data-dependent
  Scenario: Clicking the 'View Authenticate Questions' link displays a the correct information in the Contacts Authentication sub-screen
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    And I select the contact with the CRN '1103020285' from the Contacts table
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
  Scenario: A contact with no contacts is shown with a warning
    Given I have selected the business with SBI '1000000000'
    And I am on the Business Linked Contacts page
    Then I see the 'Contacts' table is empty
    And I see a warning 'There are no linked contacts for this business with SBI 1000000000'

  @advanced @data-dependent
  Scenario: When a contact's permission is NOT level "NO_ACCESS", the Permission Description list is correct.
    Given I have selected the business with SBI '107591843'
    And I am on the Business Linked Contacts page
    And I select the contact with the CRN '1103969349' from the Contacts table
    And I select the Permission 'BASIC_PAYMENT_SCHEME' from the Permission table
    Then I see the LinkedContacts Permission Description table with 'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'

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
    And the LinkedContacts page updates to show the following information
      | label                   | value                                                                                                                                                                                    |
      | Title                   | Lady Grey                                                                                                                                                                             |
      | CRN                     | 1111111901                                                                                                                                                                               |
      | Full Name               | Lady Grey                                                                                                                                                                 |
      | Role                    | Business Partner                                                                                                                                                                         |
      | Permissions             | BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS |
      | Permissions Levels      | SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND                                                                                                                            |
      | Permission Descriptions | View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim         |

  @advanced @data-dependent
  Scenario: When a contact's permission is level "NO_ACCESS", the Permission Description list shows the correct warning message "We didn't find any data to show at this time".
    Given I have selected the business with SBI '3333333333'
    And I am on the Business Linked Contacts page
    And I select the contact with the CRN '1111111901' from the Contacts table
    And I select the Permission 'LAND_DETAILS' from the Permission table
    Then I see the 'Permission Description' table is empty
    And I see a warning message 'We didn't find any data to show at this time' under the 'Permission Description' table

  @advanced @data-dependent
  Scenario: If the user does not have the correct permissions to see data they have requested, the user is shown an error message (401)
    Given I am logged in as user 'DEF'
    And I have selected the business with SBI '3000000401'
    And I am on the Business Linked Contacts page
    Then I see a warning 'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.'

  @advanced @data-dependent
  Scenario: If the user does not have the correct permissions to see data they have requested, the user is shown an error message (403)
    Given I am logged in as user 'DEF'
    And I have selected the business with SBI '3000000403'
    And I am on the Business Linked Contacts page
    Then I see a warning 'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.'


  @advanced @data-dependent
  Scenario: If CV encounters an error while loading the page, the user is shown an error message
    Given I have selected the business with SBI '3000000500'
    And I am on the Business Linked Contacts page
    Then I see a warning 'An error has occurred. Error code 500 was returned from the DAL.'

  @advanced @data-dependent
  Scenario: If the SBI cannot be found, the user is shown an error message
    Given I have selected the business with SBI '1010101010'
    And I am on the Business Linked Contacts page
    Then I see a warning 'Business with SBI 1010101010 was not found'

