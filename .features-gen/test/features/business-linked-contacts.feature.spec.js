// Generated from: test/features/business-linked-contacts.feature
import { test } from '../../../test/features/steps/fixtures.js'

test.describe('Consolidated View Business Linked Contacts page', () => {
  test(
    'Clicking the View customer button navigates the user to the relevant Contacts page in CRM.',
    { tag: ['@intermediate', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await And(
        "I select the contact with the CRN '1103969349' from the Contacts table",
        null,
        { businessLinkedContactsPage }
      )
      await When('I click the View customer button', null, {
        businessLinkedContactsPage
      })
      await Then(
        "I see the CRM Contact Details page for the contact with the CRN '1103969349'",
        null,
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'On clicking on a customer, information is shown correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await When(
        "I select the contact with the CRN '1103020285' from the Contacts table",
        null,
        { businessLinkedContactsPage }
      )
      await Then(
        'the LinkedContacts page updates to show the following information',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Title' }, { value: 'Merl Kemmer' }] },
              { cells: [{ value: 'CRN' }, { value: '1103020285' }] },
              {
                cells: [
                  { value: 'Full Name' },
                  { value: 'Mr. Merl Elody Kemmer' }
                ]
              },
              { cells: [{ value: 'Role' }, { value: 'Business Partner' }] },
              {
                cells: [
                  { value: 'Permissions' },
                  {
                    value:
                      'BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Permissions Levels' },
                  {
                    value:
                      'SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Permission Descriptions' },
                  {
                    value:
                      'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'
                  }
                ]
              }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'On clicking on a Permission, the Permission Description table updates correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await When(
        "I select the Permission 'ENTITLEMENTS' from the Permission table",
        null,
        { businessLinkedContactsPage }
      )
      await Then(
        "the LinkedContacts Permission Description table updates with the following descriptions 'View entitlements, Transfer entitlements, Apply for new entitlements'",
        null,
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'On clicking on a contact, information is shown correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await When(
        "I select the contact with the CRN '1103969349' from the Contacts table",
        null,
        { businessLinkedContactsPage }
      )
      await Then(
        'the LinkedContacts page updates to show the following information',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Title' }, { value: 'Velma Deckow' }] },
              { cells: [{ value: 'CRN' }, { value: '1103969349' }] },
              {
                cells: [
                  { value: 'Full Name' },
                  { value: 'Miss Velma Lavern Deckow' }
                ]
              },
              { cells: [{ value: 'Role' }, { value: 'Business Partner' }] },
              {
                cells: [
                  { value: 'Permissions' },
                  {
                    value:
                      'BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Permissions Levels' },
                  {
                    value:
                      'SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Permission Descriptions' },
                  {
                    value:
                      'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'
                  }
                ]
              }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the CRN column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await When("I enter '3020' in the search box", null, { page })
      await Then(
        'I see the the correct list of contacts as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CRN' }, { value: '1103020285' }] },
              { cells: [{ value: 'First Name' }, { value: 'Merl' }] },
              { cells: [{ value: 'Last Name' }, { value: 'Kemmer' }] }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of contacts as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CRN' }, { value: '1103020285,1103969349' }] },
              { cells: [{ value: 'First Name' }, { value: 'Merl,Velma' }] },
              { cells: [{ value: 'Last Name' }, { value: 'Kemmer,Deckow' }] }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the First Name column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await When("I enter 'elm' in the search box", null, { page })
      await Then(
        'I see the the correct list of contacts as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CRN' }, { value: '1103969349' }] },
              { cells: [{ value: 'First Name' }, { value: 'Velma' }] },
              { cells: [{ value: 'Last Name' }, { value: 'Deckow' }] }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of contacts as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CRN' }, { value: '1103020285,1103969349' }] },
              { cells: [{ value: 'First Name' }, { value: 'Merl,Velma' }] },
              { cells: [{ value: 'Last Name' }, { value: 'Kemmer,Deckow' }] }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Last Name column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await When("I enter 'emm' in the search box", null, { page })
      await Then(
        'I see the the correct list of contacts as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CRN' }, { value: '1103020285' }] },
              { cells: [{ value: 'First Name' }, { value: 'Merl' }] },
              { cells: [{ value: 'Last Name' }, { value: 'Kemmer' }] }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of contacts as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CRN' }, { value: '1103020285,1103969349' }] },
              { cells: [{ value: 'First Name' }, { value: 'Merl,Velma' }] },
              { cells: [{ value: 'Last Name' }, { value: 'Kemmer,Deckow' }] }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'Searching for a string that returns no results results in a warning message',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await When("I enter '1-2-3-a-b-c' in the search box", null, { page })
      await Then(
        "I see a warning 'There are no linked contacts for the search criteria entered'"
      )
    }
  )

  test(
    "Clicking the 'View Authenticate Questions' link displays a the correct information in the Contacts Authentication sub-screen",
    { tag: ['@advanced', '@data-dependent'] },
    async ({
      Given,
      When,
      Then,
      And,
      businessLinkedContactsAuthenticationPage,
      businessLinkedContactsPage,
      page
    }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await And(
        "I select the contact with the CRN '1103020285' from the Contacts table",
        null,
        { businessLinkedContactsPage }
      )
      await When("'View Authenticate Questions' link", null, {
        businessLinkedContactsPage
      })
      await Then(
        'I see the Contacts Authentication sub-screen with the following information',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Title' }, { value: '0000000123' }] },
              {
                cells: [
                  { value: 'Full Name' },
                  { value: 'Mr Merl Elody Kemmer' }
                ]
              },
              { cells: [{ value: 'Role' }, { value: 'Business Partner' }] },
              { cells: [{ value: 'Date of Birth' }, { value: '07/01/1963' }] },
              { cells: [{ value: 'Memorable Date' }, { value: '01/02/2003' }] },
              {
                cells: [{ value: 'Memorable Event' }, { value: 'Bar Mitzvah' }]
              },
              { cells: [{ value: 'Memorable Place' }, { value: 'Vegas' }] },
              { cells: [{ value: 'Updated Date' }, { value: '01/01/2025' }] }
            ]
          }
        },
        { businessLinkedContactsAuthenticationPage }
      )
    }
  )

  test(
    'The correct Linked Contacts are shown for a business',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await Then(
        'I see the the correct list of contacts as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CRN' }, { value: '1103020285,1103969349' }] },
              { cells: [{ value: 'First Name' }, { value: 'Merl,Velma' }] },
              { cells: [{ value: 'Last Name' }, { value: 'Kemmer,Deckow' }] }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'A contact with no contacts is shown with a warning',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, page }) => {
      await Given("I have selected the business with SBI '1000000000'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await Then("I see the 'Contacts' table is empty", null, { page })
      await And(
        "I see a warning 'There are no linked contacts for this business with SBI 1000000000'"
      )
    }
  )

  test(
    'When a contact\'s permission is NOT level "NO_ACCESS", the Permission Description list is correct.',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '107591843'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await And(
        "I select the contact with the CRN '1103969349' from the Contacts table",
        null,
        { businessLinkedContactsPage }
      )
      await And(
        "I select the Permission 'BASIC_PAYMENT_SCHEME' from the Permission table",
        null,
        { businessLinkedContactsPage }
      )
      await Then(
        "I see the LinkedContacts Permission Description table with 'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'"
      )
    }
  )

  test(
    'When a contact has no first name, data is displayed correctly on the Linked Contacts screen',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '3333333333'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await And(
        "I select the contact with the CRN '1111111901' from the Contacts table",
        null,
        { businessLinkedContactsPage }
      )
      await Then(
        'I see the the correct list of contacts as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CRN' }, { value: '1111111901' }] },
              { cells: [{ value: 'First Name' }, { value: '' }] },
              { cells: [{ value: 'Last Name' }, { value: 'Grey' }] }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
      await And(
        'the LinkedContacts page updates to show the following information',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Title' }, { value: 'Lady Grey' }] },
              { cells: [{ value: 'CRN' }, { value: '1111111901' }] },
              { cells: [{ value: 'Full Name' }, { value: 'Lady Grey' }] },
              { cells: [{ value: 'Role' }, { value: 'Business Partner' }] },
              {
                cells: [
                  { value: 'Permissions' },
                  {
                    value:
                      'BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Permissions Levels' },
                  {
                    value:
                      'SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Permission Descriptions' },
                  {
                    value:
                      'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'
                  }
                ]
              }
            ]
          }
        },
        { businessLinkedContactsPage }
      )
    }
  )

  test(
    'When a contact\'s permission is level "NO_ACCESS", the Permission Description list shows the correct warning message "We didn\'t find any data to show at this time".',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessLinkedContactsPage, page }) => {
      await Given("I have selected the business with SBI '3333333333'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await And(
        "I select the contact with the CRN '1111111901' from the Contacts table",
        null,
        { businessLinkedContactsPage }
      )
      await And(
        "I select the Permission 'LAND_DETAILS' from the Permission table",
        null,
        { businessLinkedContactsPage }
      )
      await Then("I see the 'Permission Description' table is empty", null, {
        page
      })
      await And(
        "I see a warning message 'We didn't find any data to show at this time' under the 'Permission Description' table",
        null,
        { page }
      )
    }
  )

  test(
    'If the user does not have the correct permissions to see data they have requested, the user is shown an error message (401)',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, page }) => {
      await Given("I am logged in as user 'DEF'", null, { page })
      await And("I have selected the business with SBI '3000000401'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await Then(
        "I see a warning 'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.'"
      )
    }
  )

  test(
    'If the user does not have the correct permissions to see data they have requested, the user is shown an error message (403)',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, page }) => {
      await Given("I am logged in as user 'DEF'", null, { page })
      await And("I have selected the business with SBI '3000000403'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await Then(
        "I see a warning 'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.'"
      )
    }
  )

  test(
    'If CV encounters an error while loading the page, the user is shown an error message',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, page }) => {
      await Given("I have selected the business with SBI '3000000500'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await Then(
        "I see a warning 'An error has occurred. Error code 500 was returned from the DAL.'"
      )
    }
  )

  test(
    'If the SBI cannot be found, the user is shown an error message',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, page }) => {
      await Given("I have selected the business with SBI '1010101010'", null, {
        page
      })
      await And('I am on the Business Linked Contacts page', null, { page })
      await Then("I see a warning 'Business with SBI 1010101010 was not found'")
    }
  )
})

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [
    ({}, use) => use('test/features/business-linked-contacts.feature'),
    { scope: 'test', box: true }
  ],
  $bddFileData: [({}, use) => use(bddFileData), { scope: 'test', box: true }]
})

const bddFileData = [
  // bdd-data-start
  {
    pwTestLine: 6,
    pickleLine: 4,
    tags: ['@intermediate', '@data-dependent'],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 5,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 6,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 7,
        keywordType: 'Context',
        textWithKeyword:
          "And I select the contact with the CRN '1103969349' from the Contacts table",
        stepMatchArguments: [
          { group: { start: 35, value: '1103969349', children: [] } }
        ]
      },
      {
        pwStepLine: 10,
        gherkinStepLine: 8,
        keywordType: 'Action',
        textWithKeyword: 'When I click the View customer button',
        stepMatchArguments: []
      },
      {
        pwStepLine: 11,
        gherkinStepLine: 9,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see the CRM Contact Details page for the contact with the CRN '1103969349'",
        stepMatchArguments: [
          { group: { start: 65, value: '1103969349', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 14,
    pickleLine: 12,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 15,
        gherkinStepLine: 13,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 16,
        gherkinStepLine: 14,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 17,
        gherkinStepLine: 15,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the contact with the CRN '1103020285' from the Contacts table",
        stepMatchArguments: [
          { group: { start: 35, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 18,
        gherkinStepLine: 16,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then the LinkedContacts page updates to show the following information',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 21,
    pickleLine: 27,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 22,
        gherkinStepLine: 28,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '0000000001'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '0000000001', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 23,
        gherkinStepLine: 29,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 24,
        gherkinStepLine: 30,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the Permission 'ENTITLEMENTS' from the Permission table",
        stepMatchArguments: [
          { group: { start: 25, value: 'ENTITLEMENTS', children: [] } }
        ]
      },
      {
        pwStepLine: 25,
        gherkinStepLine: 31,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then the LinkedContacts Permission Description table updates with the following descriptions 'View entitlements, Transfer entitlements, Apply for new entitlements'",
        stepMatchArguments: [
          {
            group: {
              start: 89,
              value:
                'View entitlements, Transfer entitlements, Apply for new entitlements',
              children: []
            }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 28,
    pickleLine: 34,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 29,
        gherkinStepLine: 35,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 30,
        gherkinStepLine: 36,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 31,
        gherkinStepLine: 37,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the contact with the CRN '1103969349' from the Contacts table",
        stepMatchArguments: [
          { group: { start: 35, value: '1103969349', children: [] } }
        ]
      },
      {
        pwStepLine: 32,
        gherkinStepLine: 38,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then the LinkedContacts page updates to show the following information',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 35,
    pickleLine: 49,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 36,
        gherkinStepLine: 50,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 37,
        gherkinStepLine: 51,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 38,
        gherkinStepLine: 52,
        keywordType: 'Action',
        textWithKeyword: "When I enter '3020' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '3020', children: [] } }
        ]
      },
      {
        pwStepLine: 39,
        gherkinStepLine: 53,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of contacts as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 40,
        gherkinStepLine: 58,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 41,
        gherkinStepLine: 59,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 42,
        gherkinStepLine: 60,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of contacts as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 45,
    pickleLine: 67,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 46,
        gherkinStepLine: 68,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 47,
        gherkinStepLine: 69,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 48,
        gherkinStepLine: 70,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'elm' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'elm', children: [] } }
        ]
      },
      {
        pwStepLine: 49,
        gherkinStepLine: 71,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of contacts as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 50,
        gherkinStepLine: 76,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 51,
        gherkinStepLine: 77,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 52,
        gherkinStepLine: 78,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of contacts as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 55,
    pickleLine: 85,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 56,
        gherkinStepLine: 86,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 57,
        gherkinStepLine: 87,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 58,
        gherkinStepLine: 88,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'emm' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'emm', children: [] } }
        ]
      },
      {
        pwStepLine: 59,
        gherkinStepLine: 89,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of contacts as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 60,
        gherkinStepLine: 94,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 61,
        gherkinStepLine: 95,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 62,
        gherkinStepLine: 96,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of contacts as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 65,
    pickleLine: 103,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 66,
        gherkinStepLine: 104,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 67,
        gherkinStepLine: 105,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 68,
        gherkinStepLine: 106,
        keywordType: 'Action',
        textWithKeyword: "When I enter '1-2-3-a-b-c' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '1-2-3-a-b-c', children: [] } }
        ]
      },
      {
        pwStepLine: 69,
        gherkinStepLine: 107,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning 'There are no linked contacts for the search criteria entered'",
        stepMatchArguments: [
          {
            group: {
              start: 16,
              value:
                "'There are no linked contacts for the search criteria entered'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 17,
                  value:
                    'There are no linked contacts for the search criteria entered',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 72,
    pickleLine: 110,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 73,
        gherkinStepLine: 111,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 74,
        gherkinStepLine: 112,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 75,
        gherkinStepLine: 113,
        keywordType: 'Context',
        textWithKeyword:
          "And I select the contact with the CRN '1103020285' from the Contacts table",
        stepMatchArguments: [
          { group: { start: 35, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 76,
        gherkinStepLine: 114,
        keywordType: 'Action',
        textWithKeyword: "When 'View Authenticate Questions' link",
        stepMatchArguments: []
      },
      {
        pwStepLine: 77,
        gherkinStepLine: 115,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the Contacts Authentication sub-screen with the following information',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 80,
    pickleLine: 127,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 81,
        gherkinStepLine: 128,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 82,
        gherkinStepLine: 129,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 83,
        gherkinStepLine: 130,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of contacts as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 86,
    pickleLine: 137,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 87,
        gherkinStepLine: 138,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1000000000'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1000000000', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 88,
        gherkinStepLine: 139,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 89,
        gherkinStepLine: 140,
        keywordType: 'Outcome',
        textWithKeyword: "Then I see the 'Contacts' table is empty",
        stepMatchArguments: [
          { group: { start: 11, value: 'Contacts', children: [] } }
        ]
      },
      {
        pwStepLine: 90,
        gherkinStepLine: 141,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a warning 'There are no linked contacts for this business with SBI 1000000000'",
        stepMatchArguments: [
          {
            group: {
              start: 16,
              value:
                "'There are no linked contacts for this business with SBI 1000000000'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 17,
                  value:
                    'There are no linked contacts for this business with SBI 1000000000',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 93,
    pickleLine: 144,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 94,
        gherkinStepLine: 145,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107591843'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107591843', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 95,
        gherkinStepLine: 146,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 96,
        gherkinStepLine: 147,
        keywordType: 'Context',
        textWithKeyword:
          "And I select the contact with the CRN '1103969349' from the Contacts table",
        stepMatchArguments: [
          { group: { start: 35, value: '1103969349', children: [] } }
        ]
      },
      {
        pwStepLine: 97,
        gherkinStepLine: 148,
        keywordType: 'Context',
        textWithKeyword:
          "And I select the Permission 'BASIC_PAYMENT_SCHEME' from the Permission table",
        stepMatchArguments: [
          { group: { start: 25, value: 'BASIC_PAYMENT_SCHEME', children: [] } }
        ]
      },
      {
        pwStepLine: 98,
        gherkinStepLine: 149,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see the LinkedContacts Permission Description table with 'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'",
        stepMatchArguments: [
          {
            group: {
              start: 59,
              value:
                "'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 60,
                  value:
                    'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 101,
    pickleLine: 152,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 102,
        gherkinStepLine: 153,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '3333333333'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '3333333333', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 103,
        gherkinStepLine: 154,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 104,
        gherkinStepLine: 155,
        keywordType: 'Context',
        textWithKeyword:
          "And I select the contact with the CRN '1111111901' from the Contacts table",
        stepMatchArguments: [
          { group: { start: 35, value: '1111111901', children: [] } }
        ]
      },
      {
        pwStepLine: 105,
        gherkinStepLine: 156,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of contacts as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 106,
        gherkinStepLine: 161,
        keywordType: 'Outcome',
        textWithKeyword:
          'And the LinkedContacts page updates to show the following information',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 109,
    pickleLine: 172,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 110,
        gherkinStepLine: 173,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '3333333333'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '3333333333', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 111,
        gherkinStepLine: 174,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 112,
        gherkinStepLine: 175,
        keywordType: 'Context',
        textWithKeyword:
          "And I select the contact with the CRN '1111111901' from the Contacts table",
        stepMatchArguments: [
          { group: { start: 35, value: '1111111901', children: [] } }
        ]
      },
      {
        pwStepLine: 113,
        gherkinStepLine: 176,
        keywordType: 'Context',
        textWithKeyword:
          "And I select the Permission 'LAND_DETAILS' from the Permission table",
        stepMatchArguments: [
          { group: { start: 25, value: 'LAND_DETAILS', children: [] } }
        ]
      },
      {
        pwStepLine: 114,
        gherkinStepLine: 177,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see the 'Permission Description' table is empty",
        stepMatchArguments: [
          {
            group: { start: 11, value: 'Permission Description', children: [] }
          }
        ]
      },
      {
        pwStepLine: 115,
        gherkinStepLine: 178,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a warning message 'We didn't find any data to show at this time' under the 'Permission Description' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: "We didn't find any data to show at this time",
              children: []
            }
          },
          {
            group: { start: 82, value: 'Permission Description', children: [] }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 118,
    pickleLine: 181,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 119,
        gherkinStepLine: 182,
        keywordType: 'Context',
        textWithKeyword: "Given I am logged in as user 'DEF'",
        stepMatchArguments: [
          { group: { start: 24, value: 'DEF', children: [] } }
        ]
      },
      {
        pwStepLine: 120,
        gherkinStepLine: 183,
        keywordType: 'Context',
        textWithKeyword:
          "And I have selected the business with SBI '3000000401'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '3000000401', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 121,
        gherkinStepLine: 184,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 122,
        gherkinStepLine: 185,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning 'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.'",
        stepMatchArguments: [
          {
            group: {
              start: 16,
              value:
                "'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 17,
                  value:
                    'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 125,
    pickleLine: 188,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 126,
        gherkinStepLine: 189,
        keywordType: 'Context',
        textWithKeyword: "Given I am logged in as user 'DEF'",
        stepMatchArguments: [
          { group: { start: 24, value: 'DEF', children: [] } }
        ]
      },
      {
        pwStepLine: 127,
        gherkinStepLine: 190,
        keywordType: 'Context',
        textWithKeyword:
          "And I have selected the business with SBI '3000000403'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '3000000403', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 128,
        gherkinStepLine: 191,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 129,
        gherkinStepLine: 192,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning 'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.'",
        stepMatchArguments: [
          {
            group: {
              start: 16,
              value:
                "'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 17,
                  value:
                    'You do not have permissions to view this data. Make sure you have an active Rural Payments Portal account with email address xxx@xxx.xxx. See Consolidated View guidance for for more information.',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 132,
    pickleLine: 196,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 133,
        gherkinStepLine: 197,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '3000000500'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '3000000500', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 134,
        gherkinStepLine: 198,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 135,
        gherkinStepLine: 199,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning 'An error has occurred. Error code 500 was returned from the DAL.'",
        stepMatchArguments: [
          {
            group: {
              start: 16,
              value:
                "'An error has occurred. Error code 500 was returned from the DAL.'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 17,
                  value:
                    'An error has occurred. Error code 500 was returned from the DAL.',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 138,
    pickleLine: 202,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 139,
        gherkinStepLine: 203,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1010101010'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1010101010', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 140,
        gherkinStepLine: 204,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Linked Contacts page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Business Linked Contacts',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 141,
        gherkinStepLine: 205,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning 'Business with SBI 1010101010 was not found'",
        stepMatchArguments: [
          {
            group: {
              start: 16,
              value: "'Business with SBI 1010101010 was not found'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 17,
                  value: 'Business with SBI 1010101010 was not found',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      }
    ]
  }
] // bdd-data-end
