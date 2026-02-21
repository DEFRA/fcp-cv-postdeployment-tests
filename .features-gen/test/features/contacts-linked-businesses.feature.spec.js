// Generated from: test/features/contacts-linked-businesses.feature
import { test } from '../../../test/features/steps/fixtures.js'

test.describe('Consolidated View Contacts Linked Businesses page', () => {
  test(
    'Page opens with correct components displayed.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given('I have gone to the Contacts Linked Businesses page', null, {
        page
      })
      await Then('I see a Search box', null, { page })
      await And(
        "I see an 'Businesses' table with column headers as follows 'SBI, Name' in a left-hand side pane"
      )
      await And("the first item of the 'Businesses' table is selected", null, {
        page
      })
      await And(
        'I see a title in bold of the name of the business in the right-hand side pane',
        null,
        { contactsLinkedBusinessesPage }
      )
      await And(
        "I see LinkedBusinesses fields for 'SBI, Role' in the right-hand side pane",
        null,
        { contactsLinkedBusinessesPage }
      )
      await And(
        "I see a 'View business' button in the right-hand side pane",
        null,
        { contactsLinkedBusinessesPage }
      )
      await And(
        "I see an 'Permissions' table with column headers as follows 'Permission, Level' in the right-hand side pane"
      )
      await And("the first item of the 'Permission' table is selected", null, {
        page
      })
      await And(
        "I see an 'Permission Description' table with column headers as follows 'Permission Description'",
        null,
        { page }
      )
      await And(
        "the first item of the 'Permission Description' table is selected",
        null,
        { page }
      )
    }
  )

  test(
    'On clicking on a business, information is shown correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given("I have selected the contact with CRN '1103020285'", null, {
        page
      })
      await And('I am on the Contacts Linked Businesses page', null, { page })
      await When(
        "I select the business 'Bailey, Dickens and Mraz' from the Businesses table",
        null,
        { contactsLinkedBusinessesPage }
      )
      await Then(
        'the LinkedBusinesses page updates to show the following information',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Title' },
                  { value: 'Bailey, Dickens and Mraz' }
                ]
              },
              { cells: [{ value: 'SBI' }, { value: '1103020285' }] },
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
                      'View business summary, View claims, "View land, features and covers", Create and edit a claim, Amend a previously submitted claim, "Amend land, features and covers", Submit a claim, Withdraw a claim, "Receive warnings and notifications"'
                  }
                ]
              }
            ]
          }
        },
        { contactsLinkedBusinessesPage }
      )
    }
  )

  test(
    'On clicking on a Permission, the Permission Description table updates correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given("I have selected the contact with CRN '1103020285'", null, {
        page
      })
      await And('I am on the Contacts Linked Businesses page', null, { page })
      await When(
        "I select the business 'Goldner, Schmeler and Kutch' from the Businesses table",
        null,
        { contactsLinkedBusinessesPage }
      )
      await And(
        "I select the Permission 'ENTITLEMENTS' from the Permissions table",
        null,
        { contactsLinkedBusinessesPage }
      )
      await Then(
        "the LinkedBusinesses Permission Description table updates with the following descriptions 'View entitlements, Transfer entitlements, Apply for new entitlements'",
        null,
        { contactsLinkedBusinessesPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Name column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given("I have selected the contact with CRN '1103020285'", null, {
        page
      })
      await And('I am on the Contacts Linked Businesses page', null, { page })
      await When("I enter 'Bailey' in the search box", null, { page })
      await Then(
        'I see the the correct list of businesses as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'SBI' }, { value: '121428499' }] },
              {
                cells: [
                  { value: 'Name' },
                  { value: '"Bailey, Dickens and Mraz"' }
                ]
              }
            ]
          }
        },
        { contactsLinkedBusinessesPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of businesses as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'SBI' },
                  { value: '121428499, 106238988, 106284736, 107591843' }
                ]
              },
              {
                cells: [
                  { value: 'Name' },
                  {
                    value:
                      '"Bailey, Dickens and Mraz", "Gleichner,Okuneva and Murazik", "Goldner, Schmeler and Kutch", "Homenick, McDermott and Luettgen"'
                  }
                ]
              }
            ]
          }
        },
        { contactsLinkedBusinessesPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the SBI column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given("I have selected the contact with CRN '1103020285'", null, {
        page
      })
      await And('I am on the Contacts Linked Businesses page', null, { page })
      await When("I enter '10759' in the search box", null, { page })
      await Then(
        'I see the the correct list of businesses as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'SBI' }, { value: '107591843' }] },
              {
                cells: [
                  { value: 'Name' },
                  { value: '"Homenick, McDermott and Luettgen"' }
                ]
              }
            ]
          }
        },
        { contactsLinkedBusinessesPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of businesses as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'SBI' },
                  { value: '121428499, 106238988, 106284736, 107591843' }
                ]
              },
              {
                cells: [
                  { value: 'Name' },
                  {
                    value:
                      '"Bailey, Dickens and Mraz", "Gleichner,Okuneva and Murazik", "Goldner, Schmeler and Kutch", "Homenick, McDermott and Luettgen"'
                  }
                ]
              }
            ]
          }
        },
        { contactsLinkedBusinessesPage }
      )
    }
  )

  test(
    'Clicking the View Business button navigates the user to the relevant Business page in CRM.',
    { tag: ['@intermediate', '@data-dependent'] },
    async ({ Given, When, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given("I have selected the contact with CRN '1103020285'", null, {
        page
      })
      await And('I am on the Contacts Linked Businesses page', null, { page })
      await And(
        "I have selected 'Homenick, McDermott and Luettgen' in the Businesses table",
        null,
        { contactsLinkedBusinessesPage }
      )
      await When('I click the View Business button', null, {
        contactsLinkedBusinessesPage
      })
      await Then(
        "I see the CRM Organisation Details page for the 'Homenick, McDermott and Luettgen' organisation",
        null,
        { contactsLinkedBusinessesPage }
      )
    }
  )

  test(
    'The correct Linked Businesses are shown for a contact',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given("I have selected the contact with CRN '1103020285'", null, {
        page
      })
      await And('I am on the Contacts Linked Businesses page', null, { page })
      await Then(
        'I see the the correct list of businesses as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'SBI' },
                  { value: '121428499, 106238988, 106284736, 107591843' }
                ]
              },
              {
                cells: [
                  { value: 'Name' },
                  {
                    value:
                      '"Bailey, Dickens and Mraz", "Gleichner,Okuneva and Murazik", "Goldner, Schmeler and Kutch", "Homenick, McDermott and Luettgen"'
                  }
                ]
              }
            ]
          }
        },
        { contactsLinkedBusinessesPage }
      )
    }
  )

  test(
    'A contact with no businesses is shown without error',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, page }) => {
      await Given("I have selected the contact with CRN '9000000000'", null, {
        page
      })
      await And('I am on the Contacts Linked Businesses page', null, { page })
      await Then("I see the 'Businesses' table is empty", null, { page })
    }
  )

  test(
    'When a business\'s permission is NOT level "NO_ACCESS", the Permission Description list is correct.',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given("I have selected the contact with CRN '1103020285'", null, {
        page
      })
      await When(
        "I select 'Homenick, McDermott and Luettgen' in the Businesses table"
      )
      await And(
        "I select the Permission 'BASIC_PAYMENT_SCHEME' from the Permissions table",
        null,
        { contactsLinkedBusinessesPage }
      )
      await Then(
        'the LinkedBusinesses Permission Description table updates with the following descriptions \'View business summary, View claims, "View land, features and covers", Create and edit a claim, Amend a previously submitted claim, "Amend land, features and covers", Submit a claim, Withdraw a claim, "Receive warnings and notifications"\'',
        null,
        { contactsLinkedBusinessesPage }
      )
    }
  )

  test(
    'When a business\'s permission is level "NO_ACCESS", the Permission Description list shows the correct warning message "We didn\'t find any data to show at this time".',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, contactsLinkedBusinessesPage, page }) => {
      await Given("I have selected the contact with CRN '0000000001'", null, {
        page
      })
      await When(
        "I select 'Homenick, McDermott and Luettgen' in the Businesses table"
      )
      await And(
        "I select the Permission 'LAND_DETAILS' from the Permissions table",
        null,
        { contactsLinkedBusinessesPage }
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
})

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [
    ({}, use) => use('test/features/contacts-linked-businesses.feature'),
    { scope: 'test', box: true }
  ],
  $bddFileData: [({}, use) => use(bddFileData), { scope: 'test', box: true }]
})

const bddFileData = [
  // bdd-data-start
  {
    pwTestLine: 6,
    pickleLine: 4,
    tags: ['@basic', '@possible-vi-test'],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 5,
        keywordType: 'Context',
        textWithKeyword:
          'Given I have gone to the Contacts Linked Businesses page',
        stepMatchArguments: [
          {
            group: {
              start: 19,
              value: 'Contacts Linked Businesses',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 6,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see a Search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 7,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see an 'Businesses' table with column headers as follows 'SBI, Name' in a left-hand side pane",
        stepMatchArguments: [
          {
            group: {
              start: 9,
              value: "'Businesses'",
              children: [
                { children: [{ children: [] }] },
                { start: 10, value: 'Businesses', children: [{ children: [] }] }
              ]
            },
            parameterTypeName: 'string'
          },
          {
            group: {
              start: 59,
              value: "'SBI, Name'",
              children: [
                { children: [{ children: [] }] },
                { start: 60, value: 'SBI, Name', children: [{ children: [] }] }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      },
      {
        pwStepLine: 10,
        gherkinStepLine: 8,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the first item of the 'Businesses' table is selected",
        stepMatchArguments: [
          { group: { start: 23, value: 'Businesses', children: [] } }
        ]
      },
      {
        pwStepLine: 11,
        gherkinStepLine: 9,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see a title in bold of the name of the business in the right-hand side pane',
        stepMatchArguments: []
      },
      {
        pwStepLine: 12,
        gherkinStepLine: 10,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see LinkedBusinesses fields for 'SBI, Role' in the right-hand side pane",
        stepMatchArguments: [
          { group: { start: 35, value: 'SBI, Role', children: [] } }
        ]
      },
      {
        pwStepLine: 13,
        gherkinStepLine: 11,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a 'View business' button in the right-hand side pane",
        stepMatchArguments: []
      },
      {
        pwStepLine: 14,
        gherkinStepLine: 12,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see an 'Permissions' table with column headers as follows 'Permission, Level' in the right-hand side pane",
        stepMatchArguments: [
          {
            group: {
              start: 9,
              value: "'Permissions'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 10,
                  value: 'Permissions',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          },
          {
            group: {
              start: 60,
              value: "'Permission, Level'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 61,
                  value: 'Permission, Level',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      },
      {
        pwStepLine: 15,
        gherkinStepLine: 13,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the first item of the 'Permission' table is selected",
        stepMatchArguments: [
          { group: { start: 23, value: 'Permission', children: [] } }
        ]
      },
      {
        pwStepLine: 16,
        gherkinStepLine: 14,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see an 'Permission Description' table with column headers as follows 'Permission Description'",
        stepMatchArguments: [
          {
            group: { start: 10, value: 'Permission Description', children: [] }
          },
          {
            group: { start: 72, value: 'Permission Description', children: [] }
          }
        ]
      },
      {
        pwStepLine: 17,
        gherkinStepLine: 15,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the first item of the 'Permission Description' table is selected",
        stepMatchArguments: [
          {
            group: { start: 23, value: 'Permission Description', children: [] }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 20,
    pickleLine: 18,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 21,
        gherkinStepLine: 19,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '1103020285'",
        stepMatchArguments: [
          { group: { start: 38, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 22,
        gherkinStepLine: 20,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Contacts Linked Businesses page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Contacts Linked Businesses',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 23,
        gherkinStepLine: 21,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the business 'Bailey, Dickens and Mraz' from the Businesses table",
        stepMatchArguments: [
          {
            group: {
              start: 23,
              value: 'Bailey, Dickens and Mraz',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 24,
        gherkinStepLine: 22,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then the LinkedBusinesses page updates to show the following information',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 27,
    pickleLine: 32,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 28,
        gherkinStepLine: 33,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '1103020285'",
        stepMatchArguments: [
          { group: { start: 38, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 29,
        gherkinStepLine: 34,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Contacts Linked Businesses page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Contacts Linked Businesses',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 30,
        gherkinStepLine: 35,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the business 'Goldner, Schmeler and Kutch' from the Businesses table",
        stepMatchArguments: [
          {
            group: {
              start: 23,
              value: 'Goldner, Schmeler and Kutch',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 31,
        gherkinStepLine: 36,
        keywordType: 'Action',
        textWithKeyword:
          "And I select the Permission 'ENTITLEMENTS' from the Permissions table",
        stepMatchArguments: [
          { group: { start: 25, value: 'ENTITLEMENTS', children: [] } }
        ]
      },
      {
        pwStepLine: 32,
        gherkinStepLine: 37,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then the LinkedBusinesses Permission Description table updates with the following descriptions 'View entitlements, Transfer entitlements, Apply for new entitlements'",
        stepMatchArguments: [
          {
            group: {
              start: 91,
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
    pwTestLine: 35,
    pickleLine: 40,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 36,
        gherkinStepLine: 41,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '1103020285'",
        stepMatchArguments: [
          { group: { start: 38, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 37,
        gherkinStepLine: 42,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Contacts Linked Businesses page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Contacts Linked Businesses',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 38,
        gherkinStepLine: 43,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'Bailey' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'Bailey', children: [] } }
        ]
      },
      {
        pwStepLine: 39,
        gherkinStepLine: 44,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of businesses as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 40,
        gherkinStepLine: 48,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 41,
        gherkinStepLine: 49,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 42,
        gherkinStepLine: 50,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of businesses as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 45,
    pickleLine: 56,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 46,
        gherkinStepLine: 57,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '1103020285'",
        stepMatchArguments: [
          { group: { start: 38, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 47,
        gherkinStepLine: 58,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Contacts Linked Businesses page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Contacts Linked Businesses',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 48,
        gherkinStepLine: 59,
        keywordType: 'Action',
        textWithKeyword: "When I enter '10759' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '10759', children: [] } }
        ]
      },
      {
        pwStepLine: 49,
        gherkinStepLine: 60,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of businesses as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 50,
        gherkinStepLine: 64,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 51,
        gherkinStepLine: 65,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 52,
        gherkinStepLine: 66,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of businesses as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 55,
    pickleLine: 72,
    tags: ['@intermediate', '@data-dependent'],
    steps: [
      {
        pwStepLine: 56,
        gherkinStepLine: 73,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '1103020285'",
        stepMatchArguments: [
          { group: { start: 38, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 57,
        gherkinStepLine: 74,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Contacts Linked Businesses page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Contacts Linked Businesses',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 58,
        gherkinStepLine: 75,
        keywordType: 'Context',
        textWithKeyword:
          "And I have selected 'Homenick, McDermott and Luettgen' in the Businesses table",
        stepMatchArguments: [
          {
            group: {
              start: 17,
              value: 'Homenick, McDermott and Luettgen',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 59,
        gherkinStepLine: 76,
        keywordType: 'Action',
        textWithKeyword: 'When I click the View Business button',
        stepMatchArguments: []
      },
      {
        pwStepLine: 60,
        gherkinStepLine: 77,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see the CRM Organisation Details page for the 'Homenick, McDermott and Luettgen' organisation",
        stepMatchArguments: [
          {
            group: {
              start: 49,
              value: 'Homenick, McDermott and Luettgen',
              children: []
            }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 63,
    pickleLine: 80,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 64,
        gherkinStepLine: 81,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '1103020285'",
        stepMatchArguments: [
          { group: { start: 38, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 65,
        gherkinStepLine: 82,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Contacts Linked Businesses page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Contacts Linked Businesses',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 66,
        gherkinStepLine: 83,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of businesses as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 69,
    pickleLine: 89,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 70,
        gherkinStepLine: 90,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '9000000000'",
        stepMatchArguments: [
          { group: { start: 38, value: '9000000000', children: [] } }
        ]
      },
      {
        pwStepLine: 71,
        gherkinStepLine: 91,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Contacts Linked Businesses page',
        stepMatchArguments: [
          {
            group: {
              start: 12,
              value: 'Contacts Linked Businesses',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 72,
        gherkinStepLine: 92,
        keywordType: 'Outcome',
        textWithKeyword: "Then I see the 'Businesses' table is empty",
        stepMatchArguments: [
          { group: { start: 11, value: 'Businesses', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 75,
    pickleLine: 95,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 76,
        gherkinStepLine: 96,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '1103020285'",
        stepMatchArguments: [
          { group: { start: 38, value: '1103020285', children: [] } }
        ]
      },
      {
        pwStepLine: 77,
        gherkinStepLine: 97,
        keywordType: 'Action',
        textWithKeyword:
          "When I select 'Homenick, McDermott and Luettgen' in the Businesses table",
        stepMatchArguments: [
          {
            group: {
              start: 9,
              value: "'Homenick, McDermott and Luettgen'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 10,
                  value: 'Homenick, McDermott and Luettgen',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      },
      {
        pwStepLine: 78,
        gherkinStepLine: 98,
        keywordType: 'Action',
        textWithKeyword:
          "And I select the Permission 'BASIC_PAYMENT_SCHEME' from the Permissions table",
        stepMatchArguments: [
          { group: { start: 25, value: 'BASIC_PAYMENT_SCHEME', children: [] } }
        ]
      },
      {
        pwStepLine: 79,
        gherkinStepLine: 99,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then the LinkedBusinesses Permission Description table updates with the following descriptions \'View business summary, View claims, "View land, features and covers", Create and edit a claim, Amend a previously submitted claim, "Amend land, features and covers", Submit a claim, Withdraw a claim, "Receive warnings and notifications"\'',
        stepMatchArguments: [
          {
            group: {
              start: 91,
              value:
                'View business summary, View claims, "View land, features and covers", Create and edit a claim, Amend a previously submitted claim, "Amend land, features and covers", Submit a claim, Withdraw a claim, "Receive warnings and notifications"',
              children: []
            }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 82,
    pickleLine: 102,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 83,
        gherkinStepLine: 103,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '0000000001'",
        stepMatchArguments: [
          { group: { start: 38, value: '0000000001', children: [] } }
        ]
      },
      {
        pwStepLine: 84,
        gherkinStepLine: 104,
        keywordType: 'Action',
        textWithKeyword:
          "When I select 'Homenick, McDermott and Luettgen' in the Businesses table",
        stepMatchArguments: [
          {
            group: {
              start: 9,
              value: "'Homenick, McDermott and Luettgen'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 10,
                  value: 'Homenick, McDermott and Luettgen',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      },
      {
        pwStepLine: 85,
        gherkinStepLine: 105,
        keywordType: 'Action',
        textWithKeyword:
          "And I select the Permission 'LAND_DETAILS' from the Permissions table",
        stepMatchArguments: [
          { group: { start: 25, value: 'LAND_DETAILS', children: [] } }
        ]
      },
      {
        pwStepLine: 86,
        gherkinStepLine: 106,
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
        pwStepLine: 87,
        gherkinStepLine: 107,
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
  }
] // bdd-data-end
