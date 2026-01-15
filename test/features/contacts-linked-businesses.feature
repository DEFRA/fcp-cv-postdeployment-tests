Feature: Consolidated View Contacts Linked Businesses page

  @basic @possible-vi-test
  Scenario: Page opens with correct components displayed.
    Given I am on the Contacts Linked Businesses page
    Then I see a Search box
    And I see an 'Businesses' table with column headers as follows 'SBI, Name' in a left-hand side pane
    And the first item of the 'Businesses' table is selected
    And I see a title in bold of the name of the business in the right-hand side pane
    And I see fields for 'SBI, Role' in the right-hand side pane
    And I see a 'View business' button in the right-hand side pane
    And I see an 'Permissions' table with column headers as follows 'Permission, Level' in the right-hand side pane
    And the first item of the 'Permission' table is selected
    And I see an 'Permission Description' table with column headers as follows 'Permission Description'
    And the first item of the 'Permission Description' table is selected

  @advanced @data-dependent
  Scenario: On clicking on a business, information is shown correctly
    Given I have selected the contact with CRN '1103020285'
    And I am on the Contacts Linked Businesses page
    When I select the business 'Bailey, Dickens and Mraz' from the Businesses table
    Then the page updates to show the following information
      | label                   | value                                                                                                                                                                                                                                        |
      | Title                   | Bailey, Dickens and Mraz                                                                                                                                                                                                                     |
      | SBI                     | 1103020285                                                                                                                                                                                                                                   |
      | Role                    | Business Partner                                                                                                                                                                                                                             |
      | Permissions             | BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS                                                     |
      | Permissions Levels      | SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND                                                                                                                                                                                |
      | Permission Descriptions | View business summary, View claims, "View land, features and covers", Create and edit a claim, Amend a previously submitted claim, "Amend land, features and covers", Submit a claim, Withdraw a claim, "Receive warnings and notifications" |

  @advanced @data-dependent
  Scenario: On clicking on a Permission, the Permission Description table updates correctly
    Given I have selected the contact with CRN '1103020285'
    And I am on the Contacts Linked Businesses page
    When I select the business 'Goldner, Schmeler and Kutch' from the Businesses table
    And I select the Permission 'ENTITLEMENTS' from the Permissions table
    Then the Permission Description table updates with the following descriptions 'View entitlements, Transfer entitlements, Apply for new entitlements'

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the Name column filters correctly
    Given I have selected the contact with CRN '1103020285'
    And I am on the Contacts Linked Businesses page
    When I enter 'Bailey' in the search box
    Then I see the the correct list of businesses as follows
      | label | value                      |
      | SBI   | 121428499                  |
      | Name  | "Bailey, Dickens and Mraz" |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of businesses as follows
      | label | value                                                                                                                          |
      | SBI   | 121428499, 106238988, 106284736, 107591843                                                                                     |
      | Name  | "Bailey, Dickens and Mraz", "Gleichner,Okuneva and Murazik", "Goldner, Schmeler and Kutch", "Homenick, McDermott and Luettgen" |

  @advanced @data-dependent
  Scenario: Searching for a partially matching string in the SBI column filters correctly
    Given I have selected the contact with CRN '1103020285'
    And I am on the Contacts Linked Businesses page
    When I enter '10759' in the search box
    Then I see the the correct list of businesses as follows
      | label | value                              |
      | SBI   | 107591843                          |
      | Name  | "Homenick, McDermott and Luettgen" |
    When I enter a blank value in the search box
    And Press the Enter key
    Then I see the the correct list of businesses as follows
      | label | value                                                                                                                          |
      | SBI   | 121428499, 106238988, 106284736, 107591843                                                                                     |
      | Name  | "Bailey, Dickens and Mraz", "Gleichner,Okuneva and Murazik", "Goldner, Schmeler and Kutch", "Homenick, McDermott and Luettgen" |

  @intermediate @data-dependent
  Scenario: Clicking the View Business button navigates the user to the relevant Business page in CRM.
    Given I have selected the contact with CRN '1103020285'
    And I am on the Contacts Linked Businesses page
    And I have selected 'Homenick, McDermott and Luettgen' in the Businesses table
    When I click the View Business button
    Then I see the CRM Organisation Details page for the 'Homenick, McDermott and Luettgen' organisation

  @advanced @data-dependent
  Scenario: The correct Linked Businesses are shown for a contact
    Given I have selected the contact with CRN '1103020285'
    And I am on the Contacts Linked Businesses page
    Then I see the the correct list of businesses as follows
      | label | value                                                                                                                          |
      | SBI   | 121428499, 106238988, 106284736, 107591843                                                                                     |
      | Name  | "Bailey, Dickens and Mraz", "Gleichner,Okuneva and Murazik", "Goldner, Schmeler and Kutch", "Homenick, McDermott and Luettgen" |

  @advanced @data-dependent
  Scenario: A contact with no businesses is shown without error
    Given I have selected the contact with CRN '9000000000'
    And I am on the Contacts Linked Businesses page
    Then I see the 'Businesses' table is empty

  @advanced @data-dependent
  Scenario: When a business's permission is NOT level "NO_ACCESS", the Permission Description list is correct.
    Given I have selected the contact with CRN '1103020285'
    When I select 'Homenick, McDermott and Luettgen' in the Businesses table
    And I select the Permission 'BASIC_PAYMENT_SCHEME' from the Permissions table
    Then the Permission Description table updates with the following descriptions 'View business summary, View claims, "View land, features and covers", Create and edit a claim, Amend a previously submitted claim, "Amend land, features and covers", Submit a claim, Withdraw a claim, "Receive warnings and notifications"'

  @advanced @data-dependent @require-mock-update
  Scenario: When a business's permission is level "NO_ACCESS", the Permission Description list shows the correct warning message "We didn't find any data to show at this time".
    Given I have selected the contact with CRN '0000000001'
    When I select 'Homenick, McDermott and Luettgen' in the Businesses table
    And I select the Permission 'LAND_DETAILS' from the Permissions table
    Then I see the 'Permission Description' table is empty
    And I see a warning message 'We didn't find any data to show at this time' under the 'Permission Description' table
