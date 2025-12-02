Feature: Consolidated View Business Messages

  @basic
  Scenario: Page opens with no errors
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Contacts drop-down appears
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Once a contact is selected, a Search box and a table of messages with headers Date and Subject appears.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @basic
  Scenario: Once a Message is clicked on, the right-hand pane populates with the correct header, fields and message display box.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a partially matching string for a string in the Subject column and press enter -> table is filtered correctly
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @intermediate
  Scenario: Enter a blank value in the search box and press enter -> All records are displayed
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a business in the RP Portal and navigate to YYY to see a list of their linked contacts. Confirm that the list in RP is the same as in CV.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a business in the RP Portal with no linked contacts. Confirm that the list in CV is blank.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a business in the RP Portal with a contact who has no messages for that business. Confirm that the messages in CV is blank with an appropriate informational warning displayed.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a contact in the RP Portal and navigate to YYY to see a list of their messages for the last 12 months. Confirm that the list in RP is the same as in CV.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a contact in the RP Portal and navigate to YYY to see a list of their messages and select one. Using CV, click on the same message. The data displayed is correct.
    Given I am on home page
    When I click the Documentation tab
    Then Confirm that the following fields have the same data in RP and CV: Subject (as the header), Date, Read? And Deleted? Fields and the box to display the message.

  @advanced
  Scenario: Find a contact with a read message in RP. Confirm in CV that this message shows as read.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a contact with an unread message in RP. Confirm in CV that this message shows as unread.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a contact with a deleted message in RP. Confirm in CV that this message shows as deleted.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title

  @advanced
  Scenario: Find a contact with a message that has not been deleted in RP. Confirm in CV that this message shows as not deleted.
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title
