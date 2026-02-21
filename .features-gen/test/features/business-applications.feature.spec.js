// Generated from: test/features/business-applications.feature
import { test } from '../../../test/features/steps/fixtures.js'

test.describe('Consolidated View Applications page', () => {
  test(
    'Page opens with correct components displayed.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, Then, And, businessApplicationsPage, page }) => {
      await Given('I have gone to the Applications page', null, { page })
      await Then(
        "I see an 'Applications' table with column headers as follows 'Application ID, Year, Application Name, Status'",
        null,
        { page }
      )
      await And(
        "the first item of the 'Applications' table is selected",
        null,
        { page }
      )
      await And('I see a search box', null, { businessApplicationsPage })
      await And(
        'there is an Application Details pane on the right-hand pane',
        null,
        { businessApplicationsPage }
      )
      await And(
        "the Application Details pane has a title corresponding to the 'Application Name' field of the selected application",
        null,
        { businessApplicationsPage }
      )
      await And(
        "the Application Details pane has fields for 'Application ID, Scheme, Year, Status, Status (Portal), Submitted Date, Agreement References, Last Movement, Last Movement Date/Time'",
        null,
        { businessApplicationsPage }
      )
      await And(
        'the Application Details pane has a Movement History section',
        null,
        { businessApplicationsPage }
      )
      await And(
        "I see a 'Movements History' table with column headers as follows 'Date/Time, Movement, Check'"
      )
    }
  )

  test(
    'Searching for a partially matching string in the Application ID column filters correctly',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await When("I enter '658' in the search box", null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Application ID' }, { value: '2203658' }] },
              { cells: [{ value: 'Year' }, { value: '2025' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  { value: 'Domestic Capital Claim' }
                ]
              },
              { cells: [{ value: 'Status' }, { value: 'IN PROGRESS' }] }
            ]
          }
        },
        { businessApplicationsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Year' }, { value: '2025,2024,2023' }] },
              {
                cells: [
                  { value: 'Application ID' },
                  { value: '2203658, 2203641, 2200679' }
                ]
              },
              {
                cells: [
                  { value: 'Application Name' },
                  {
                    value:
                      'Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'IN PROGRESS, IN PROGRESS, SUBMITTED' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Year column filters correctly',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await When("I enter '2024' in the search box", null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Application ID' }, { value: '2203641' }] },
              { cells: [{ value: 'Year' }, { value: '2024' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  { value: 'Domestic Capital Claim' }
                ]
              },
              { cells: [{ value: 'Status' }, { value: 'IN PROGRESS' }] }
            ]
          }
        },
        { businessApplicationsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Application ID' },
                  { value: '2203658, 2203641, 2200679' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025,2024,2023' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  {
                    value:
                      'Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'IN PROGRESS, IN PROGRESS, SUBMITTED' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Application Name column filters correctly',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await When("I enter 'Domestic' in the search box", null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Application ID' },
                  { value: '2203658,2203641' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025,2024' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  { value: 'Domestic Capital Claim, Domestic Capital Claim' }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'IN PROGRESS, IN PROGRESS' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Application ID' },
                  { value: '2203658, 2203641, 2200679' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025,2024,2023' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  {
                    value:
                      'Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'IN PROGRESS, IN PROGRESS, SUBMITTED' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Status column filters correctly',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await When("I enter 'SUBM' in the search box", null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Application ID' }, { value: '2200679' }] },
              { cells: [{ value: 'Year' }, { value: '2023' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  { value: 'CO Rev Payments' }
                ]
              },
              { cells: [{ value: 'Status' }, { value: 'SUBMITTED' }] }
            ]
          }
        },
        { businessApplicationsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Application ID' },
                  { value: '2203658, 2203641, 2200679' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025,2024,2023' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  {
                    value:
                      'Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'IN PROGRESS, IN PROGRESS, SUBMITTED' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Scheme column filters correctly',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await When("I enter 'PILLAR II' in the search box", null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Application ID' }, { value: '2200679' }] },
              { cells: [{ value: 'Year' }, { value: '2023' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  { value: 'CO Rev Payments' }
                ]
              },
              { cells: [{ value: 'Status' }, { value: 'SUBMITTED' }] }
            ]
          }
        },
        { businessApplicationsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Application ID' },
                  { value: '2203658, 2203641, 2200679' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025,2024,2023' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  {
                    value:
                      'Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'IN PROGRESS, IN PROGRESS, SUBMITTED' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Agreement References column filters correctly',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await When("I enter '65676' in the search box", null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Application ID' }, { value: '2203641' }] },
              { cells: [{ value: 'Year' }, { value: '2024' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  { value: 'Domestic Capital Claim' }
                ]
              },
              { cells: [{ value: 'Status' }, { value: 'IN PROGRESS' }] }
            ]
          }
        },
        { businessApplicationsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Applications as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Application ID' },
                  { value: '2203658, 2203641, 2200679' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025,2024,2023' }] },
              {
                cells: [
                  { value: 'Application Name' },
                  {
                    value:
                      'Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'IN PROGRESS, IN PROGRESS, SUBMITTED' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
    }
  )

  test(
    'For a business with no Applications, a warning message is shown indicating that there are no Applications',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '1000000000'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await Then("I see the 'Applications' table is empty", null, { page })
      await And('the Applications details pane is empty', null, {
        businessApplicationsPage
      })
      await And(
        "I see a warning message 'We didn't find any data to show at this time' under the 'Application Details' table",
        null,
        { page }
      )
    }
  )

  test(
    'The Applications data is correct',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '106238988'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await And(
        "I have selected an application with the ID '9098148058'",
        null,
        { businessApplicationsPage }
      )
      await Then(
        'I see the correct data in the Application Details pane as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Title' },
                  {
                    value:
                      'SOLITO ABSQUE DECET DEMONSTRO REPREHENDERIT VIA SOLLERS UBI'
                  }
                ]
              },
              { cells: [{ value: 'Application ID' }, { value: '9098148058' }] },
              {
                cells: [
                  { value: 'Scheme' },
                  { value: 'BIS DERIPIO SUFFICIO SUPPELLEX VILICUS' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2022' }] },
              { cells: [{ value: 'Status' }, { value: 'DELETED' }] },
              { cells: [{ value: 'Status (Portal)' }, { value: '...' }] },
              {
                cells: [
                  { value: 'Submitted Date' },
                  { value: '31/12/2022 03:33:24' }
                ]
              },
              {
                cells: [
                  { value: 'Agreement References' },
                  { value: '9190356161' }
                ]
              },
              {
                cells: [
                  { value: 'Last Movement' },
                  { value: 'CREATE DRAFT APPLICATION' }
                ]
              },
              {
                cells: [
                  { value: 'Last Movement Date/Time' },
                  { value: '31/12/2022 07:15:25' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
      await And(
        'I see the correct data in the Movements History table as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Date/Time' },
                  {
                    value:
                      '31/12/2022 07:15:25, 31/12/2022 21:03:16, 31/12/2022 02:09:35'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Movement' },
                  { value: 'CREATE DRAFT APPLICATION,DELETE, CREATION' }
                ]
              },
              {
                cells: [
                  { value: 'Check' },
                  { value: 'PASSED, PASSED, NOT PASSED' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
    }
  )

  test(
    'The “Movements History” table is ordered by date/time',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, And, businessApplicationsPage, page }) => {
      await Given("I have selected the business with SBI '106238988'", null, {
        page
      })
      await And('I am on the Applications page', null, { page })
      await And(
        "I have selected an application with the ID '1890586021'",
        null,
        { businessApplicationsPage }
      )
      await And(
        'I see the correct data in the Movements History table ordered by date/time as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Date/Time' },
                  {
                    value:
                      '31/12/2022 21:30:55, 31/12/2022 13:21:28, 31/12/2022 11:41:13, 31/12/2022 08:15:03, 31/12/2022 05:50:06'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Movement' },
                  { value: 'UPDATE, UPDATE, CREATION, UPDATE, UPDATE' }
                ]
              },
              {
                cells: [
                  { value: 'Check' },
                  { value: 'PASSED, PASSED, PASSED, PASSED, PASSED' }
                ]
              }
            ]
          }
        },
        { businessApplicationsPage }
      )
    }
  )
})

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [
    ({}, use) => use('test/features/business-applications.feature'),
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
        textWithKeyword: 'Given I have gone to the Applications page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 6,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see an 'Applications' table with column headers as follows 'Application ID, Year, Application Name, Status'",
        stepMatchArguments: [
          { group: { start: 10, value: 'Applications', children: [] } },
          {
            group: {
              start: 62,
              value: 'Application ID, Year, Application Name, Status',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 7,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the first item of the 'Applications' table is selected",
        stepMatchArguments: [
          { group: { start: 23, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 10,
        gherkinStepLine: 8,
        keywordType: 'Outcome',
        textWithKeyword: 'And I see a search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 11,
        gherkinStepLine: 9,
        keywordType: 'Outcome',
        textWithKeyword:
          'And there is an Application Details pane on the right-hand pane',
        stepMatchArguments: []
      },
      {
        pwStepLine: 12,
        gherkinStepLine: 10,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the Application Details pane has a title corresponding to the 'Application Name' field of the selected application",
        stepMatchArguments: []
      },
      {
        pwStepLine: 13,
        gherkinStepLine: 11,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the Application Details pane has fields for 'Application ID, Scheme, Year, Status, Status (Portal), Submitted Date, Agreement References, Last Movement, Last Movement Date/Time'",
        stepMatchArguments: [
          {
            group: {
              start: 45,
              value:
                'Application ID, Scheme, Year, Status, Status (Portal), Submitted Date, Agreement References, Last Movement, Last Movement Date/Time',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 14,
        gherkinStepLine: 12,
        keywordType: 'Outcome',
        textWithKeyword:
          'And the Application Details pane has a Movement History section',
        stepMatchArguments: []
      },
      {
        pwStepLine: 15,
        gherkinStepLine: 13,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a 'Movements History' table with column headers as follows 'Date/Time, Movement, Check'",
        stepMatchArguments: [
          {
            group: {
              start: 8,
              value: "'Movements History'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 9,
                  value: 'Movements History',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          },
          {
            group: {
              start: 65,
              value: "'Date/Time, Movement, Check'",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 66,
                  value: 'Date/Time, Movement, Check',
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
    pwTestLine: 18,
    pickleLine: 16,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 19,
        gherkinStepLine: 17,
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
        pwStepLine: 20,
        gherkinStepLine: 18,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 21,
        gherkinStepLine: 19,
        keywordType: 'Action',
        textWithKeyword: "When I enter '658' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '658', children: [] } }
        ]
      },
      {
        pwStepLine: 22,
        gherkinStepLine: 20,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 23,
        gherkinStepLine: 26,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 24,
        gherkinStepLine: 27,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 25,
        gherkinStepLine: 28,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 28,
    pickleLine: 36,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 29,
        gherkinStepLine: 37,
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
        pwStepLine: 30,
        gherkinStepLine: 38,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 31,
        gherkinStepLine: 39,
        keywordType: 'Action',
        textWithKeyword: "When I enter '2024' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '2024', children: [] } }
        ]
      },
      {
        pwStepLine: 32,
        gherkinStepLine: 40,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 33,
        gherkinStepLine: 46,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 34,
        gherkinStepLine: 47,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 35,
        gherkinStepLine: 48,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 38,
    pickleLine: 56,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 39,
        gherkinStepLine: 57,
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
        pwStepLine: 40,
        gherkinStepLine: 58,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 41,
        gherkinStepLine: 59,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'Domestic' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'Domestic', children: [] } }
        ]
      },
      {
        pwStepLine: 42,
        gherkinStepLine: 60,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 43,
        gherkinStepLine: 66,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 44,
        gherkinStepLine: 67,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 45,
        gherkinStepLine: 68,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 48,
    pickleLine: 76,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 49,
        gherkinStepLine: 77,
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
        pwStepLine: 50,
        gherkinStepLine: 78,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 51,
        gherkinStepLine: 79,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'SUBM' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'SUBM', children: [] } }
        ]
      },
      {
        pwStepLine: 52,
        gherkinStepLine: 80,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 53,
        gherkinStepLine: 86,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 54,
        gherkinStepLine: 87,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 55,
        gherkinStepLine: 88,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 58,
    pickleLine: 96,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 59,
        gherkinStepLine: 97,
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
        pwStepLine: 60,
        gherkinStepLine: 98,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 61,
        gherkinStepLine: 99,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'PILLAR II' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'PILLAR II', children: [] } }
        ]
      },
      {
        pwStepLine: 62,
        gherkinStepLine: 100,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 63,
        gherkinStepLine: 106,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 64,
        gherkinStepLine: 107,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 65,
        gherkinStepLine: 108,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 68,
    pickleLine: 116,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 69,
        gherkinStepLine: 117,
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
        pwStepLine: 70,
        gherkinStepLine: 118,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 71,
        gherkinStepLine: 119,
        keywordType: 'Action',
        textWithKeyword: "When I enter '65676' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '65676', children: [] } }
        ]
      },
      {
        pwStepLine: 72,
        gherkinStepLine: 120,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 73,
        gherkinStepLine: 126,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 74,
        gherkinStepLine: 127,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 75,
        gherkinStepLine: 128,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Applications as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 78,
    pickleLine: 136,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 79,
        gherkinStepLine: 137,
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
        pwStepLine: 80,
        gherkinStepLine: 138,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 81,
        gherkinStepLine: 139,
        keywordType: 'Outcome',
        textWithKeyword: "Then I see the 'Applications' table is empty",
        stepMatchArguments: [
          { group: { start: 11, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 82,
        gherkinStepLine: 140,
        keywordType: 'Outcome',
        textWithKeyword: 'And the Applications details pane is empty',
        stepMatchArguments: []
      },
      {
        pwStepLine: 83,
        gherkinStepLine: 141,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a warning message 'We didn't find any data to show at this time' under the 'Application Details' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: "We didn't find any data to show at this time",
              children: []
            }
          },
          { group: { start: 82, value: 'Application Details', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 86,
    pickleLine: 144,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 87,
        gherkinStepLine: 145,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '106238988'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '106238988', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 88,
        gherkinStepLine: 146,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 89,
        gherkinStepLine: 147,
        keywordType: 'Context',
        textWithKeyword:
          "And I have selected an application with the ID '9098148058'",
        stepMatchArguments: [
          {
            group: { start: 44, value: '9098148058', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 90,
        gherkinStepLine: 148,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the correct data in the Application Details pane as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 91,
        gherkinStepLine: 160,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see the correct data in the Movements History table as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 94,
    pickleLine: 167,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 95,
        gherkinStepLine: 168,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '106238988'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '106238988', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 96,
        gherkinStepLine: 169,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Applications page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Applications', children: [] } }
        ]
      },
      {
        pwStepLine: 97,
        gherkinStepLine: 170,
        keywordType: 'Context',
        textWithKeyword:
          "And I have selected an application with the ID '1890586021'",
        stepMatchArguments: [
          {
            group: { start: 44, value: '1890586021', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 98,
        gherkinStepLine: 171,
        keywordType: 'Context',
        textWithKeyword:
          'And I see the correct data in the Movements History table ordered by date/time as follows',
        stepMatchArguments: []
      }
    ]
  }
] // bdd-data-end
