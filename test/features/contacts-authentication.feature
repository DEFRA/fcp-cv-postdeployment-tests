Feature: Consolidated View Contacts Authentication page

  @advanced @data-dependent
  Scenario: Contacts with no authentication data set should have all table data shown as NOT SET.
    Given I have selected a contact '1111111400'
    When I navigate to the Contacts Authentication page
    Then All table entries should be shown as 'NOT SET'

  @advanced @data-dependent @require-mock-update
  Scenario: Contacts who cannot be found in the authentication database should have all table data shown as NOT FOUND.
    Given I have selected a contact who is not in the authentication database
    When I navigate to the Contacts Authentication page
    Then All table entries should be shown as 'NOT FOUND'

  @advanced @data-dependent
  Scenario: Authentication data should be displayed correctly
    Given I have selected the contact with CRN '1111111200'
    When I navigate to the Contacts Authentication page
    Then All table entries should be shown as follows
      | label           | value                     |
      | Memorable Date  | 09/11/2024                |
      | Memorable Event | claro                     |
      | Memorable Place | Castle Treutel            |
      | Updated Date    | 2024-12-31T09:58:05.370Z  |

  @advanced
  Scenario: The "Retrieved At" field is accurate
    Given I have gone to the Contacts Authentication page
    Then the Retrieved At field is equal to todays date and current time
