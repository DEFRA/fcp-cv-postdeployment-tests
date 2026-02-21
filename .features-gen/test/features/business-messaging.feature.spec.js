// Generated from: test/features/business-messaging.feature
import { test } from '../../../test/features/steps/fixtures.js'

test.describe('Consolidated View Business Messages page', () => {
  test(
    'Page opens with correct components displayed.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, Then, And, businessMessagingPage, page }) => {
      await Given('I have gone to the Business Messages page', null, { page })
      await Then('I see the Contacts drop-down', null, {
        businessMessagingPage
      })
      await And('I see a disabled Date Range drop-down', null, {
        businessMessagingPage
      })
      await And('I see a disabled Show Read/Unread drop-down', null, {
        businessMessagingPage
      })
      await And('I see a Search box', null, { page })
    }
  )

  test(
    'Page updates correctly once a contact is selected.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, When, Then, And, businessMessagingPage, page }) => {
      await Given('I have gone to the Business Messages page', null, { page })
      await When('I select a contact', null, { businessMessagingPage })
      await Then(
        "the Date Range field becomes active with options for 'Last 12 months, Last 24 months, Last 36 months, All'",
        null,
        { businessMessagingPage }
      )
      await And(
        "the Show Read/Unread field becomes active with options for 'All, Read, Unread'",
        null,
        { businessMessagingPage }
      )
      await And(
        "I see an 'Messages' table with column headers as follows 'Status, Date, Subject'",
        null,
        { page }
      )
      await And("the first item of the 'Messages' table is selected", null, {
        page
      })
    }
  )

  test(
    'Message data updates correctly once a contact is selected.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, When, Then, And, businessMessagingPage, page }) => {
      await Given('I have gone to the Business Messages page', null, { page })
      await And('I select a contact', null, { businessMessagingPage })
      await When('I select the first message', null, { businessMessagingPage })
      await Then(
        'the right-hand pane updates with a bold title, a Date field, a Read field, a Deleted field and a Message field',
        null,
        { businessMessagingPage }
      )
      await And(
        "there is a label in the right-hand pane 'Links in the message below do not work'",
        null,
        { businessMessagingPage }
      )
    }
  )

  test(
    'Message data updates correctly after another contact is selected.',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessMessagingPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Business Messages page', null, { page })
      await And("I have selected the contact 'Vilma Yundt'", null, {
        businessMessagingPage
      })
      await When(
        "I select the message with the subject 'Agnosco cohaero ancilla.  '",
        null,
        { businessMessagingPage }
      )
      await Then(
        'right-hand pane updates with the following information',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Title' },
                  { value: 'Agnosco cohaero ancilla.' }
                ]
              },
              { cells: [{ value: 'Date' }, { value: '1723577035401' }] },
              { cells: [{ value: 'Read?' }, { value: 'No' }] },
              { cells: [{ value: 'Deleted?' }, { value: 'No' }] },
              {
                cells: [
                  { value: 'Message' },
                  {
                    value:
                      '<p>Talis cubicularis thesis cohors venia deleo tam claudeo.</p>'
                  }
                ]
              }
            ]
          }
        },
        { businessMessagingPage }
      )
    }
  )

  test(
    'Correct message is displayed when a contact has no messages for that business',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessMessagingPage, page }) => {
      await Given("I have selected the business with SBI '1106552449'", null, {
        page
      })
      await And('I am on the Business Messages page', null, { page })
      await When("I have selected the contact 'Duncan Peacock'", null, {
        businessMessagingPage
      })
      await Then("I see the 'Messages' table is empty", null, { page })
      await And(
        "I see a warning message 'There are no messages to display' under the 'Messages' table",
        null,
        { page }
      )
    }
  )

  test(
    'Contacts list is empty when a business has no contacts',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessMessagingPage, page }) => {
      await Given("I have selected the business with SBI '1000000000'", null, {
        page
      })
      await And('I am on the Business Messages page', null, { page })
      await Then('the Contacts drop-down is empty', null, {
        businessMessagingPage
      })
    }
  )

  test(
    'Searching for a partially matching string in the Subject column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessMessagingPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Business Messages page', null, { page })
      await And("I have selected the contact 'Vilma Yundt'", null, {
        businessMessagingPage
      })
      await When("I enter 'anci' in the search box", null, { page })
      await Then(
        'I see the the correct list of messages as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Status' }, { value: 'Unread' }] },
              { cells: [{ value: 'Date' }, { value: '1723577035401' }] },
              {
                cells: [
                  { value: 'Subject' },
                  { value: '"Agnosco cohaero ancilla."' }
                ]
              }
            ]
          }
        },
        { businessMessagingPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of messages as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'Unread, Unread, Read, Unread' }
                ]
              },
              {
                cells: [
                  { value: 'Date' },
                  {
                    value:
                      '1723577035401, 1717810388400, 1700229203688, 1726822799905'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Subject' },
                  {
                    value:
                      '"Agnosco cohaero ancilla.", "Vivo quae ultra caste.", "Triumphus facilis aiunt.", "Facilis beatae vesper copia velit."'
                  }
                ]
              }
            ]
          }
        },
        { businessMessagingPage }
      )
    }
  )

  test(
    'The list of contacts is correct.',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessMessagingPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Business Messages page', null, { page })
      await Then(
        "the Contacts drop-down contains entries for 'Lauren Sanford,Terry Swaniawski,Murray Kihn,Meaghan Torp,Kristy Stiedemann,Juwan Hahn,Rod Quitzon-Gibson,Stacey Willms,Marco Kovacek,Frederic Koch-Cassin,Nayeli Kub,Vilma Yundt,Henri Weissnat,Mara Stark,Kellie Flatley'",
        null,
        { businessMessagingPage }
      )
    }
  )

  test(
    'The message date filter works correctly.',
    {
      tag: [
        '@advanced',
        '@data-dependent',
        '@this-test-will-break-as-dates-get-out-of-sync',
        '@require-mock-update'
      ]
    },
    async ({ Given, When, Then, And, businessMessagingPage, page }) => {
      await Given("I have selected the business with SBI '1106552449'", null, {
        page
      })
      await And('I am on the Business Messages page', null, { page })
      await And("I have selected the contact 'Catherine Pallister'", null, {
        businessMessagingPage
      })
      await When("I select the Date Range field as 'Last 12 months'", null, {
        businessMessagingPage
      })
      await Then('I see the correct list of messages as follows', {
        dataTable: {
          rows: [
            { cells: [{ value: 'label' }, { value: 'value' }] },
            { cells: [{ value: 'Status' }, { value: 'Read' }] },
            { cells: [{ value: 'Date' }, { value: '31/12/2025' }] },
            {
              cells: [
                { value: 'Subject' },
                { value: '"Payment credit applied"' }
              ]
            }
          ]
        }
      })
      await When("I select the Date Range field as 'Last 24 months'", null, {
        businessMessagingPage
      })
      await Then('I see the correct list of messages as follows', {
        dataTable: {
          rows: [
            { cells: [{ value: 'label' }, { value: 'value' }] },
            { cells: [{ value: 'Status' }, { value: 'Read, Read' }] },
            { cells: [{ value: 'Date' }, { value: '31/12/2025, 31/12/2024' }] },
            {
              cells: [
                { value: 'Subject' },
                { value: '"Payment credit applied", "Document approved"' }
              ]
            }
          ]
        }
      })
      await When("I select the Date Range field as 'Last 36 months'", null, {
        businessMessagingPage
      })
      await Then('I see the correct list of messages as follows', {
        dataTable: {
          rows: [
            { cells: [{ value: 'label' }, { value: 'value' }] },
            { cells: [{ value: 'Status' }, { value: 'Read, Read, Read' }] },
            {
              cells: [
                { value: 'Date' },
                { value: '31/12/2025, 31/12/2024, 31/12/2023' }
              ]
            },
            {
              cells: [
                { value: 'Subject' },
                {
                  value:
                    '"Payment credit applied", "Document approved", "Document rejected"'
                }
              ]
            }
          ]
        }
      })
      await When("I select the Date Range field as 'All'", null, {
        businessMessagingPage
      })
      await Then('I see the correct list of messages as follows', {
        dataTable: {
          rows: [
            { cells: [{ value: 'label' }, { value: 'value' }] },
            {
              cells: [
                { value: 'Status' },
                { value: 'Read, Read, Read, Unread' }
              ]
            },
            {
              cells: [
                { value: 'Date' },
                { value: '31/12/2025, 31/12/2024, 31/12/2023, 10/02/2009' }
              ]
            },
            {
              cells: [
                { value: 'Subject' },
                {
                  value:
                    '"Payment credit applied", "Document approved", "Document rejected", "Document review"'
                }
              ]
            }
          ]
        }
      })
    }
  )

  test(
    'The Read-Unread message filter works correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessMessagingPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Business Messages page', null, { page })
      await And("I have selected the contact 'Vilma Yundt'", null, {
        businessMessagingPage
      })
      await When("I select 'Read' from the Read-Unread filter", null, {
        businessMessagingPage
      })
      await Then('I see the correct list of messages as follows', {
        dataTable: {
          rows: [
            { cells: [{ value: 'label' }, { value: 'value' }] },
            { cells: [{ value: 'Status' }, { value: 'Read' }] },
            { cells: [{ value: 'Date' }, { value: '1700229203688' }] },
            {
              cells: [
                { value: 'Subject' },
                { value: '"Triumphus facilis aiunt."' }
              ]
            }
          ]
        }
      })
      await When("I select 'Unread' from the Read-Unread filter", null, {
        businessMessagingPage
      })
      await Then('I see the correct list of messages as follows', {
        dataTable: {
          rows: [
            { cells: [{ value: 'label' }, { value: 'value' }] },
            {
              cells: [{ value: 'Status' }, { value: 'Unread, Unread, Unread' }]
            },
            {
              cells: [
                { value: 'Date' },
                { value: '1723577035401, 1717810388400, 1726822799905' }
              ]
            },
            {
              cells: [
                { value: 'Subject' },
                {
                  value:
                    '"Agnosco cohaero ancilla.", "Vivo quae ultra caste.", "Facilis beatae vesper copia velit."'
                }
              ]
            }
          ]
        }
      })
    }
  )

  test(
    'Deleted message data displays correctly',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessMessagingPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Business Messages page', null, { page })
      await And("I have selected the contact 'Vilma Yundt'", null, {
        businessMessagingPage
      })
      await When(
        "I select the message with the subject 'THIS IS NOT CURRENTLY AVAILABLE'",
        null,
        { businessMessagingPage }
      )
      await Then("the Deleted field is 'true'", null, { businessMessagingPage })
      await When(
        "I select the message with the subject 'Agnosco cohaero ancilla.  '",
        null,
        { businessMessagingPage }
      )
      await Then("the Deleted field is 'false'", null, {
        businessMessagingPage
      })
    }
  )
})

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [
    ({}, use) => use('test/features/business-messaging.feature'),
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
        textWithKeyword: 'Given I have gone to the Business Messages page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 6,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the Contacts drop-down',
        stepMatchArguments: []
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 7,
        keywordType: 'Outcome',
        textWithKeyword: 'And I see a disabled Date Range drop-down',
        stepMatchArguments: []
      },
      {
        pwStepLine: 10,
        gherkinStepLine: 8,
        keywordType: 'Outcome',
        textWithKeyword: 'And I see a disabled Show Read/Unread drop-down',
        stepMatchArguments: []
      },
      {
        pwStepLine: 11,
        gherkinStepLine: 9,
        keywordType: 'Outcome',
        textWithKeyword: 'And I see a Search box',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 14,
    pickleLine: 12,
    tags: ['@basic', '@possible-vi-test'],
    steps: [
      {
        pwStepLine: 15,
        gherkinStepLine: 13,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Business Messages page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 16,
        gherkinStepLine: 14,
        keywordType: 'Action',
        textWithKeyword: 'When I select a contact',
        stepMatchArguments: []
      },
      {
        pwStepLine: 17,
        gherkinStepLine: 15,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then the Date Range field becomes active with options for 'Last 12 months, Last 24 months, Last 36 months, All'",
        stepMatchArguments: [
          {
            group: {
              start: 54,
              value: 'Last 12 months, Last 24 months, Last 36 months, All',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 18,
        gherkinStepLine: 16,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the Show Read/Unread field becomes active with options for 'All, Read, Unread'",
        stepMatchArguments: [
          { group: { start: 60, value: 'All, Read, Unread', children: [] } }
        ]
      },
      {
        pwStepLine: 19,
        gherkinStepLine: 17,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see an 'Messages' table with column headers as follows 'Status, Date, Subject'",
        stepMatchArguments: [
          { group: { start: 10, value: 'Messages', children: [] } },
          { group: { start: 58, value: 'Status, Date, Subject', children: [] } }
        ]
      },
      {
        pwStepLine: 20,
        gherkinStepLine: 18,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the first item of the 'Messages' table is selected",
        stepMatchArguments: [
          { group: { start: 23, value: 'Messages', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 23,
    pickleLine: 21,
    tags: ['@basic', '@possible-vi-test'],
    steps: [
      {
        pwStepLine: 24,
        gherkinStepLine: 22,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Business Messages page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 25,
        gherkinStepLine: 23,
        keywordType: 'Context',
        textWithKeyword: 'And I select a contact',
        stepMatchArguments: []
      },
      {
        pwStepLine: 26,
        gherkinStepLine: 24,
        keywordType: 'Action',
        textWithKeyword: 'When I select the first message',
        stepMatchArguments: []
      },
      {
        pwStepLine: 27,
        gherkinStepLine: 25,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then the right-hand pane updates with a bold title, a Date field, a Read field, a Deleted field and a Message field',
        stepMatchArguments: []
      },
      {
        pwStepLine: 28,
        gherkinStepLine: 26,
        keywordType: 'Outcome',
        textWithKeyword:
          "And there is a label in the right-hand pane 'Links in the message below do not work'",
        stepMatchArguments: [
          {
            group: {
              start: 41,
              value: 'Links in the message below do not work',
              children: []
            }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 31,
    pickleLine: 29,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 32,
        gherkinStepLine: 30,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1111111111'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1111111111', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 33,
        gherkinStepLine: 31,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Messages page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 34,
        gherkinStepLine: 32,
        keywordType: 'Context',
        textWithKeyword: "And I have selected the contact 'Vilma Yundt'",
        stepMatchArguments: [
          { group: { start: 29, value: 'Vilma Yundt', children: [] } }
        ]
      },
      {
        pwStepLine: 35,
        gherkinStepLine: 33,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the message with the subject 'Agnosco cohaero ancilla.  '",
        stepMatchArguments: [
          {
            group: {
              start: 39,
              value: 'Agnosco cohaero ancilla.  ',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 36,
        gherkinStepLine: 34,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then right-hand pane updates with the following information',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 39,
    pickleLine: 43,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 40,
        gherkinStepLine: 44,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1106552449'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1106552449', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 41,
        gherkinStepLine: 45,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Messages page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 42,
        gherkinStepLine: 46,
        keywordType: 'Action',
        textWithKeyword: "When I have selected the contact 'Duncan Peacock'",
        stepMatchArguments: [
          { group: { start: 29, value: 'Duncan Peacock', children: [] } }
        ]
      },
      {
        pwStepLine: 43,
        gherkinStepLine: 47,
        keywordType: 'Outcome',
        textWithKeyword: "Then I see the 'Messages' table is empty",
        stepMatchArguments: [
          { group: { start: 11, value: 'Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 44,
        gherkinStepLine: 48,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a warning message 'There are no messages to display' under the 'Messages' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: 'There are no messages to display',
              children: []
            }
          },
          { group: { start: 70, value: 'Messages', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 47,
    pickleLine: 51,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 48,
        gherkinStepLine: 52,
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
        pwStepLine: 49,
        gherkinStepLine: 53,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Messages page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 50,
        gherkinStepLine: 54,
        keywordType: 'Outcome',
        textWithKeyword: 'Then the Contacts drop-down is empty',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 53,
    pickleLine: 57,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 54,
        gherkinStepLine: 58,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1111111111'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1111111111', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 55,
        gherkinStepLine: 59,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Messages page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 56,
        gherkinStepLine: 60,
        keywordType: 'Context',
        textWithKeyword: "And I have selected the contact 'Vilma Yundt'",
        stepMatchArguments: [
          { group: { start: 29, value: 'Vilma Yundt', children: [] } }
        ]
      },
      {
        pwStepLine: 57,
        gherkinStepLine: 61,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'anci' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'anci', children: [] } }
        ]
      },
      {
        pwStepLine: 58,
        gherkinStepLine: 62,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of messages as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 59,
        gherkinStepLine: 67,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 60,
        gherkinStepLine: 68,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 61,
        gherkinStepLine: 69,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of messages as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 64,
    pickleLine: 76,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 65,
        gherkinStepLine: 77,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1111111111'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1111111111', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 66,
        gherkinStepLine: 78,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Messages page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 67,
        gherkinStepLine: 79,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then the Contacts drop-down contains entries for 'Lauren Sanford,Terry Swaniawski,Murray Kihn,Meaghan Torp,Kristy Stiedemann,Juwan Hahn,Rod Quitzon-Gibson,Stacey Willms,Marco Kovacek,Frederic Koch-Cassin,Nayeli Kub,Vilma Yundt,Henri Weissnat,Mara Stark,Kellie Flatley'",
        stepMatchArguments: [
          {
            group: {
              start: 45,
              value:
                'Lauren Sanford,Terry Swaniawski,Murray Kihn,Meaghan Torp,Kristy Stiedemann,Juwan Hahn,Rod Quitzon-Gibson,Stacey Willms,Marco Kovacek,Frederic Koch-Cassin,Nayeli Kub,Vilma Yundt,Henri Weissnat,Mara Stark,Kellie Flatley',
              children: []
            }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 70,
    pickleLine: 82,
    tags: [
      '@advanced',
      '@data-dependent',
      '@this-test-will-break-as-dates-get-out-of-sync',
      '@require-mock-update'
    ],
    steps: [
      {
        pwStepLine: 71,
        gherkinStepLine: 83,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1106552449'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1106552449', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 72,
        gherkinStepLine: 84,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Messages page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 73,
        gherkinStepLine: 85,
        keywordType: 'Context',
        textWithKeyword:
          "And I have selected the contact 'Catherine Pallister'",
        stepMatchArguments: [
          { group: { start: 29, value: 'Catherine Pallister', children: [] } }
        ]
      },
      {
        pwStepLine: 74,
        gherkinStepLine: 86,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the Date Range field as 'Last 12 months'",
        stepMatchArguments: [
          { group: { start: 34, value: 'Last 12 months', children: [] } }
        ]
      },
      {
        pwStepLine: 75,
        gherkinStepLine: 87,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the correct list of messages as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 76,
        gherkinStepLine: 92,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the Date Range field as 'Last 24 months'",
        stepMatchArguments: [
          { group: { start: 34, value: 'Last 24 months', children: [] } }
        ]
      },
      {
        pwStepLine: 77,
        gherkinStepLine: 93,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the correct list of messages as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 78,
        gherkinStepLine: 98,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the Date Range field as 'Last 36 months'",
        stepMatchArguments: [
          { group: { start: 34, value: 'Last 36 months', children: [] } }
        ]
      },
      {
        pwStepLine: 79,
        gherkinStepLine: 99,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the correct list of messages as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 80,
        gherkinStepLine: 104,
        keywordType: 'Action',
        textWithKeyword: "When I select the Date Range field as 'All'",
        stepMatchArguments: [
          { group: { start: 34, value: 'All', children: [] } }
        ]
      },
      {
        pwStepLine: 81,
        gherkinStepLine: 105,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the correct list of messages as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 84,
    pickleLine: 112,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 85,
        gherkinStepLine: 113,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1111111111'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1111111111', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 86,
        gherkinStepLine: 114,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Messages page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 87,
        gherkinStepLine: 115,
        keywordType: 'Context',
        textWithKeyword: "And I have selected the contact 'Vilma Yundt'",
        stepMatchArguments: [
          { group: { start: 29, value: 'Vilma Yundt', children: [] } }
        ]
      },
      {
        pwStepLine: 88,
        gherkinStepLine: 116,
        keywordType: 'Action',
        textWithKeyword: "When I select 'Read' from the Read-Unread filter",
        stepMatchArguments: [
          { group: { start: 10, value: 'Read', children: [] } }
        ]
      },
      {
        pwStepLine: 89,
        gherkinStepLine: 117,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the correct list of messages as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 90,
        gherkinStepLine: 122,
        keywordType: 'Action',
        textWithKeyword: "When I select 'Unread' from the Read-Unread filter",
        stepMatchArguments: [
          { group: { start: 10, value: 'Unread', children: [] } }
        ]
      },
      {
        pwStepLine: 91,
        gherkinStepLine: 123,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the correct list of messages as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 94,
    pickleLine: 130,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 95,
        gherkinStepLine: 131,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1111111111'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1111111111', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 96,
        gherkinStepLine: 132,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Business Messages page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Business Messages', children: [] } }
        ]
      },
      {
        pwStepLine: 97,
        gherkinStepLine: 133,
        keywordType: 'Context',
        textWithKeyword: "And I have selected the contact 'Vilma Yundt'",
        stepMatchArguments: [
          { group: { start: 29, value: 'Vilma Yundt', children: [] } }
        ]
      },
      {
        pwStepLine: 98,
        gherkinStepLine: 134,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the message with the subject 'THIS IS NOT CURRENTLY AVAILABLE'",
        stepMatchArguments: [
          {
            group: {
              start: 39,
              value: 'THIS IS NOT CURRENTLY AVAILABLE',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 99,
        gherkinStepLine: 135,
        keywordType: 'Outcome',
        textWithKeyword: "Then the Deleted field is 'true'",
        stepMatchArguments: [
          { group: { start: 22, value: 'true', children: [] } }
        ]
      },
      {
        pwStepLine: 100,
        gherkinStepLine: 136,
        keywordType: 'Action',
        textWithKeyword:
          "When I select the message with the subject 'Agnosco cohaero ancilla.  '",
        stepMatchArguments: [
          {
            group: {
              start: 39,
              value: 'Agnosco cohaero ancilla.  ',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 101,
        gherkinStepLine: 137,
        keywordType: 'Outcome',
        textWithKeyword: "Then the Deleted field is 'false'",
        stepMatchArguments: [
          { group: { start: 22, value: 'false', children: [] } }
        ]
      }
    ]
  }
] // bdd-data-end
