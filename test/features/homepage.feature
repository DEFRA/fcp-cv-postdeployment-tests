Feature: CDP Home Page

  Scenario: CDP Home page is accessible
    Given I am on home page
    Then I see the correct home page title

  Scenario: CDP Documentation page is accessible
    Given I am on home page
    When I click the Documentation tab
    Then I see the correct documentation page title
