Feature: Consolidated View Business Payments page

  @advanced @data-dependent @working
  Scenario: Searching with no results shows the correct message
    Given I have gone to the 'Payments' page
    And I have selected the business with SBI '9000000000'
    When I type 'xyz' into the payments search box
    Then a 'No payments found' message is displayed
