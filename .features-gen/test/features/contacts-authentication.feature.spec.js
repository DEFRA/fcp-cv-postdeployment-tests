// Generated from: test/features/contacts-authentication.feature
import { test } from '../../../test/features/steps/fixtures.js'

test.describe('Consolidated View Contacts Authentication page', () => {
  test(
    'Page opens with correct components displayed.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, Then, And, contactsAuthenticationPage, page }) => {
      await Given('I have gone to the Contacts Authentication page', null, {
        page
      })
      await Then(
        "I see an 'Authentication' table with column headers as follows 'Memorable Date, Memorable Event, Memorable Place, Updated Date'",
        null,
        { page }
      )
      await And("I see a 'Retrieved At' field", null, {
        contactsAuthenticationPage
      })
      await And('the table data row is populated', null, {
        contactsAuthenticationPage
      })
    }
  )

  test(
    'Contacts with no authentication data set should have all table data shown as NOT SET.',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, contactsAuthenticationPage, page }) => {
      await Given("I have selected a contact '1111111400'")
      await When('I navigate to the Contacts Authentication page', null, {
        page
      })
      await Then("All table entries should be shown as 'NOT SET'", null, {
        contactsAuthenticationPage
      })
    }
  )

  test(
    'Contacts who cannot be found in the authentication database should have all table data shown as NOT FOUND.',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, contactsAuthenticationPage, page }) => {
      await Given(
        'I have selected a contact who is not in the authentication database',
        null,
        { contactsAuthenticationPage }
      )
      await When('I navigate to the Contacts Authentication page', null, {
        page
      })
      await Then("All table entries should be shown as 'NOT FOUND'", null, {
        contactsAuthenticationPage
      })
    }
  )

  test(
    'Authentication data should be displayed correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, contactsAuthenticationPage, page }) => {
      await Given("I have selected the contact with CRN '1111111200'", null, {
        page
      })
      await When('I navigate to the Contacts Authentication page', null, {
        page
      })
      await Then(
        'All table entries should be shown as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Memorable Date' }, { value: '09/11/2024' }] },
              { cells: [{ value: 'Memorable Event' }, { value: 'claro' }] },
              {
                cells: [
                  { value: 'Memorable Place' },
                  { value: 'Castle Treutel' }
                ]
              },
              {
                cells: [
                  { value: 'Updated Date' },
                  { value: '2024-12-31T09:58:05.370Z' }
                ]
              }
            ]
          }
        },
        { contactsAuthenticationPage }
      )
    }
  )

  test(
    'The "Retrieved At" field is accurate',
    { tag: ['@advanced'] },
    async ({ Given, Then, contactsAuthenticationPage, page }) => {
      await Given('I have gone to the Contacts Authentication page', null, {
        page
      })
      await Then(
        'the Retrieved At field is equal to todays date and current time',
        null,
        { contactsAuthenticationPage }
      )
    }
  )
})

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [
    ({}, use) => use('test/features/contacts-authentication.feature'),
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
          'Given I have gone to the Contacts Authentication page',
        stepMatchArguments: [
          {
            group: { start: 19, value: 'Contacts Authentication', children: [] }
          }
        ]
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 6,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see an 'Authentication' table with column headers as follows 'Memorable Date, Memorable Event, Memorable Place, Updated Date'",
        stepMatchArguments: [
          { group: { start: 10, value: 'Authentication', children: [] } },
          {
            group: {
              start: 64,
              value:
                'Memorable Date, Memorable Event, Memorable Place, Updated Date',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 7,
        keywordType: 'Outcome',
        textWithKeyword: "And I see a 'Retrieved At' field",
        stepMatchArguments: []
      },
      {
        pwStepLine: 10,
        gherkinStepLine: 8,
        keywordType: 'Outcome',
        textWithKeyword: 'And the table data row is populated',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 13,
    pickleLine: 11,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 14,
        gherkinStepLine: 12,
        keywordType: 'Context',
        textWithKeyword: "Given I have selected a contact '1111111400'",
        stepMatchArguments: [
          {
            group: {
              start: 26,
              value: "'1111111400'",
              children: [
                { children: [{ children: [] }] },
                { start: 27, value: '1111111400', children: [{ children: [] }] }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      },
      {
        pwStepLine: 15,
        gherkinStepLine: 13,
        keywordType: 'Action',
        textWithKeyword: 'When I navigate to the Contacts Authentication page',
        stepMatchArguments: [
          {
            group: { start: 18, value: 'Contacts Authentication', children: [] }
          }
        ]
      },
      {
        pwStepLine: 16,
        gherkinStepLine: 14,
        keywordType: 'Outcome',
        textWithKeyword: "Then All table entries should be shown as 'NOT SET'",
        stepMatchArguments: [
          { group: { start: 38, value: 'NOT SET', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 19,
    pickleLine: 17,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 20,
        gherkinStepLine: 18,
        keywordType: 'Context',
        textWithKeyword:
          'Given I have selected a contact who is not in the authentication database',
        stepMatchArguments: []
      },
      {
        pwStepLine: 21,
        gherkinStepLine: 19,
        keywordType: 'Action',
        textWithKeyword: 'When I navigate to the Contacts Authentication page',
        stepMatchArguments: [
          {
            group: { start: 18, value: 'Contacts Authentication', children: [] }
          }
        ]
      },
      {
        pwStepLine: 22,
        gherkinStepLine: 20,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then All table entries should be shown as 'NOT FOUND'",
        stepMatchArguments: [
          { group: { start: 38, value: 'NOT FOUND', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 25,
    pickleLine: 23,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 26,
        gherkinStepLine: 24,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the contact with CRN '1111111200'",
        stepMatchArguments: [
          { group: { start: 38, value: '1111111200', children: [] } }
        ]
      },
      {
        pwStepLine: 27,
        gherkinStepLine: 25,
        keywordType: 'Action',
        textWithKeyword: 'When I navigate to the Contacts Authentication page',
        stepMatchArguments: [
          {
            group: { start: 18, value: 'Contacts Authentication', children: [] }
          }
        ]
      },
      {
        pwStepLine: 28,
        gherkinStepLine: 26,
        keywordType: 'Outcome',
        textWithKeyword: 'Then All table entries should be shown as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 31,
    pickleLine: 34,
    tags: ['@advanced'],
    steps: [
      {
        pwStepLine: 32,
        gherkinStepLine: 35,
        keywordType: 'Context',
        textWithKeyword:
          'Given I have gone to the Contacts Authentication page',
        stepMatchArguments: [
          {
            group: { start: 19, value: 'Contacts Authentication', children: [] }
          }
        ]
      },
      {
        pwStepLine: 33,
        gherkinStepLine: 36,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then the Retrieved At field is equal to todays date and current time',
        stepMatchArguments: []
      }
    ]
  }
] // bdd-data-end
