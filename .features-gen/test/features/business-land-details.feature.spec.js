// Generated from: test/features/business-land-details.feature
import { test } from '../../../test/features/steps/fixtures.js'

test.describe('Consolidated View Business Land Details page', () => {
  test(
    'Page opens with correct components displayed.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, Then, And, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await Then('I see a Date filter', null, { businessLandDetailsPage })
      await And(
        "I see a Land Summary section with a header 'Land Summary'",
        null,
        { businessLandDetailsPage }
      )
      await And(
        "the Land Summary section has fields for 'Total Number of Parcels, Total Area (ha), Total Parcels with Pending Customer Notified Land Changes'",
        null,
        { businessLandDetailsPage }
      )
      await And(
        "I see an 'Land Summary' table with column headers as follows 'Code, Land Cover, Area (ha)'",
        null,
        { page }
      )
      await And(
        'I see a Parcels pane with a search box and a Parcels table',
        null,
        { businessLandDetailsPage }
      )
      await And(
        "I see an 'Parcels' table with column headers as follows 'Sheet, Parcel, Area (ha), Land Change?'",
        null,
        { page }
      )
    }
  )

  test(
    'Parcel summary section is displayed correctly.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await When('I select a Parcel in the Parcels table', null, {
        businessLandDetailsPage
      })
      await Then(
        'I see a Parcel Summary with a bold header which is a concatenation of the sheet and parcel codes selected',
        null,
        { businessLandDetailsPage }
      )
      await And(
        "the Parcel Summary has fields for 'Area (ha), Pending Customer Notified Land Change?, Effective Date From, Effective Date To'",
        null,
        { businessLandDetailsPage }
      )
      await And(
        "I see an 'Land Parcel Summary' table with column headers as follows 'Code, Land Cover and Area (ha)'",
        null,
        { page }
      )
    }
  )

  test(
    'The Date selector updates the screen',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await When('I select a new date', null, { businessLandDetailsPage })
      await Then('the page refreshes the data', null, {
        businessLandDetailsPage
      })
    }
  )

  test(
    'The Date selector cannot be blank',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await When('I delete all the text in the Date field', null, {
        businessLandDetailsPage
      })
      await And('Press the Enter key', null, { page })
      await Then(
        "I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table",
        null,
        { page }
      )
    }
  )

  test(
    'The Date selector only accepts the correct date format - no non numeric characters',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await When("I enter 'aaa' into the date picker", null, {
        businessLandDetailsPage
      })
      await And('Press the Enter key', null, { page })
      await Then(
        "I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table",
        null,
        { page }
      )
    }
  )

  test(
    'The Date selector only accepts the correct date format - no incomplete dates',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await When("I enter '01/01' into the date picker", null, {
        businessLandDetailsPage
      })
      await And('Press the Enter key', null, { page })
      await Then(
        "I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table",
        null,
        { page }
      )
    }
  )

  test(
    'The Date selector only accepts the correct date format - no incorrect dates',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await When("I enter '32/32/32' into the date picker", null, {
        businessLandDetailsPage
      })
      await And('Press the Enter key', null, { page })
      await Then(
        "I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table",
        null,
        { page }
      )
    }
  )

  test(
    'The Date selector only accepts current or past dates',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await When("I enter '31/12/2040' into the date picker", null, {
        businessLandDetailsPage
      })
      await And('Press the Enter key', null, { page })
      await Then(
        "I see a warning message 'Date must be todays date or in the past.' under the 'Land Date' table",
        null,
        { page }
      )
    }
  )

  test(
    'The Date selected must be on or after 01/01/2015',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given('I have gone to the Land Details page', null, { page })
      await When("I enter '31/12/2014' into the date picker", null, {
        businessLandDetailsPage
      })
      await And('Press the Enter key', null, { page })
      await Then(
        "I see a warning message 'Date must on or after 01/01/2015' under the 'Land Date' table",
        null,
        { page }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Sheet column filters the Parcels table correctly.',
    { tag: ['@intermediate', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Land Details page', null, { page })
      await When("I enter 'SS66' in the search box", null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the correct list of parcels in the Parcels table as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Sheet' }, { value: 'SS6627' }] },
              { cells: [{ value: 'Parcel' }, { value: '5662' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027' }] },
              { cells: [{ value: 'Land Change?' }, { value: 'No' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the correct list of parcels in the Parcels table as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Sheet' }, { value: 'SS6627, SS6828' }] },
              { cells: [{ value: 'Parcel' }, { value: '5662, 3818' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027, 1.027' }] },
              { cells: [{ value: 'Land Change?' }, { value: 'No, No' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Parcel column filters the Parcels table correctly.',
    { tag: ['@intermediate', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Land Details page', null, { page })
      await When("I enter '818' in the search box", null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the correct list of parcels in the Parcels table as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Sheet' }, { value: 'SS6828' }] },
              { cells: [{ value: 'Parcel' }, { value: '3818' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027' }] },
              { cells: [{ value: 'Land Change?' }, { value: 'No' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the correct list of parcels in the Parcels table as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Sheet' }, { value: 'SS6627, SS6828' }] },
              { cells: [{ value: 'Parcel' }, { value: '5662, 3818' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027, 1.027' }] },
              { cells: [{ value: 'Land Change?' }, { value: 'No, No' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
    }
  )

  test(
    'An appropriate warning is shown when a business has no land entries.',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given("I have selected the business with SBI '1000000000'", null, {
        page
      })
      await When('I navigate to the Land Details page', null, { page })
      await Then(
        'I see the following data in the Land Summary section',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Total Number of Parcels' }, { value: '0' }] },
              { cells: [{ value: 'Total Area (ha)' }, { value: '0' }] },
              {
                cells: [
                  {
                    value:
                      'Total Parcels with Pending Customer Notified Land Changes'
                  },
                  { value: '0' }
                ]
              }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'I see the following data in the Land Summary table',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Code' }, { value: '110, 120, 130' }] },
              {
                cells: [
                  { value: 'Land Cover' },
                  {
                    value:
                      'Arable Land, Permanent grass land, Permanent crop land'
                  }
                ]
              },
              { cells: [{ value: 'Area (ha)' }, { value: '0, 0, 0' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        "I see a warning message 'We didn't find any data to show at this time' under the 'Parcels' table",
        null,
        { page }
      )
    }
  )

  test(
    'Date formatting is handled correctly.',
    { tag: ['@advanced'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Land Details page', null, { page })
      await When('I select the first day of every month', null, {
        businessLandDetailsPage
      })
      await Then('no error is shown on screen', null, {
        businessLandDetailsPage
      })
    }
  )

  test(
    "Land details data is shown correctly for today's date",
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given("I have selected the business with SBI '1111111111'", null, {
        page
      })
      await And('I am on the Land Details page', null, { page })
      await Then(
        'I see the following data in the Land Summary section',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Total Number of Parcels' }, { value: '2' }] },
              { cells: [{ value: 'Total Area (ha)' }, { value: '2.0541' }] },
              {
                cells: [
                  {
                    value:
                      'Total Parcels with Pending Customer Notified Land Changes'
                  },
                  { value: '0' }
                ]
              }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'I see the following data in the Land Summary table',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Code' }, { value: '110, 130, 140' }] },
              {
                cells: [
                  { value: 'Land Cover' },
                  { value: 'Arable Land, Permanent Grassland, Permanent Crops' }
                ]
              },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027, 0, 0' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'I see the correct list of parcels in the Parcels table as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Sheet' }, { value: 'SS6627, SS6828' }] },
              { cells: [{ value: 'Parcel' }, { value: '5662, 3818' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027' }] },
              { cells: [{ value: 'Land Change?' }, { value: 'No, No' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await When("I click on the parcel 'SS6627 5662'", null, {
        businessLandDetailsPage
      })
      await Then(
        "I see a Parcel Summary section with a bold header 'SS6627 5662'",
        null,
        { businessLandDetailsPage }
      )
      await And(
        'the Parcel Summary has field data as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027' }] },
              {
                cells: [
                  { value: 'Pending Customer Notified Land Change?' },
                  { value: '...' }
                ]
              },
              {
                cells: [
                  { value: 'Effective Date From' },
                  { value: '25/07/2024' }
                ]
              },
              {
                cells: [{ value: 'Effective Date To' }, { value: '25/07/2024' }]
              }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'the Parcel Summary table has data as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Code' }, { value: '110, 131' }] },
              {
                cells: [
                  { value: 'Land Cover' },
                  { value: 'Arable Land, Permanent Grassland' }
                ]
              },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027, 2.541' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
    }
  )

  test(
    'Land details data is shown correctly for the earliest valid date - 01/01/2015',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Land Details page', null, { page })
      await When("I enter '01/01/2015' into the date picker", null, {
        businessLandDetailsPage
      })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the following data in the Land Summary section',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Total Number of Parcels' }, { value: '2' }] },
              { cells: [{ value: 'Total Area (ha)' }, { value: '2.0541' }] },
              {
                cells: [
                  {
                    value:
                      'Total Parcels with Pending Customer Notified Land Changes'
                  },
                  { value: '0' }
                ]
              }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'I see the following data in the Land Summary table',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Code' }, { value: '110, 130, 140' }] },
              {
                cells: [
                  { value: 'Land Cover' },
                  { value: 'Arable Land, Permanent Grassland, Permanent Crops' }
                ]
              },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027, 0, 0' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'I see the correct list of parcels in the Parcels table as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Sheet' }, { value: 'SS6627, SS6828' }] },
              { cells: [{ value: 'Parcel' }, { value: '5662, 3818' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027' }] },
              { cells: [{ value: 'Land Change?' }, { value: 'No, No' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await When("I click on the parcel 'SS6627 5662'", null, {
        businessLandDetailsPage
      })
      await Then(
        "I see a Parcel Summary section with a bold header 'SS6627 5662'",
        null,
        { businessLandDetailsPage }
      )
      await And(
        'the Parcel Summary has field data as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027' }] },
              {
                cells: [
                  { value: 'Pending Customer Notified Land Change?' },
                  { value: '...' }
                ]
              },
              {
                cells: [
                  { value: 'Effective Date From' },
                  { value: '25/07/2024' }
                ]
              },
              {
                cells: [{ value: 'Effective Date To' }, { value: '25/07/2024' }]
              }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'the Parcel Summary table has data as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Code' }, { value: '110, 131' }] },
              {
                cells: [
                  { value: 'Land Cover' },
                  { value: 'Arable Land, Permanent Grassland' }
                ]
              },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027, 2.541' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
    }
  )

  test(
    'Land details data is shown correctly for a valid date',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, When, Then, And, businessLandDetailsPage, page }) => {
      await Given("I have selected the business with SBI '0000000001'", null, {
        page
      })
      await And('I am on the Land Details page', null, { page })
      await When("I enter '15/06/2020' into the date picker", null, {
        businessLandDetailsPage
      })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the following data in the Land Summary section',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Total Number of Parcels' }, { value: '2' }] },
              { cells: [{ value: 'Total Area (ha)' }, { value: '2.0541' }] },
              {
                cells: [
                  {
                    value:
                      'Total Parcels with Pending Customer Notified Land Changes'
                  },
                  { value: '0' }
                ]
              }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'I see the following data in the Land Summary table',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Code' }, { value: '110, 130, 140' }] },
              {
                cells: [
                  { value: 'Land Cover' },
                  { value: 'Arable Land, Permanent Grassland, Permanent Crops' }
                ]
              },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027, 0, 0' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'I see the correct list of parcels in the Parcels table as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Sheet' }, { value: 'SS6627, SS6828' }] },
              { cells: [{ value: 'Parcel' }, { value: '5662, 3818' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027' }] },
              { cells: [{ value: 'Land Change?' }, { value: 'No, No' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await When("I click on the parcel 'SS6627 5662'", null, {
        businessLandDetailsPage
      })
      await Then(
        "I see a Parcel Summary section with a bold header 'SS6627 5662'",
        null,
        { businessLandDetailsPage }
      )
      await And(
        'the Parcel Summary has field data as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027' }] },
              {
                cells: [
                  { value: 'Pending Customer Notified Land Change?' },
                  { value: '...' }
                ]
              },
              {
                cells: [
                  { value: 'Effective Date From' },
                  { value: '25/07/2024' }
                ]
              },
              {
                cells: [{ value: 'Effective Date To' }, { value: '25/07/2024' }]
              }
            ]
          }
        },
        { businessLandDetailsPage }
      )
      await And(
        'the Parcel Summary table has data as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Code' }, { value: '110, 131' }] },
              {
                cells: [
                  { value: 'Land Cover' },
                  { value: 'Arable Land, Permanent Grassland' }
                ]
              },
              { cells: [{ value: 'Area (ha)' }, { value: '1.027, 2.541' }] }
            ]
          }
        },
        { businessLandDetailsPage }
      )
    }
  )
})

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [
    ({}, use) => use('test/features/business-land-details.feature'),
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
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 6,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see a Date filter',
        stepMatchArguments: []
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 7,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a Land Summary section with a header 'Land Summary'",
        stepMatchArguments: [
          { group: { start: 44, value: 'Land Summary', children: [] } }
        ]
      },
      {
        pwStepLine: 10,
        gherkinStepLine: 8,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the Land Summary section has fields for 'Total Number of Parcels, Total Area (ha), Total Parcels with Pending Customer Notified Land Changes'",
        stepMatchArguments: [
          {
            group: {
              start: 41,
              value:
                'Total Number of Parcels, Total Area (ha), Total Parcels with Pending Customer Notified Land Changes',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 11,
        gherkinStepLine: 9,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see an 'Land Summary' table with column headers as follows 'Code, Land Cover, Area (ha)'",
        stepMatchArguments: [
          { group: { start: 10, value: 'Land Summary', children: [] } },
          {
            group: {
              start: 62,
              value: 'Code, Land Cover, Area (ha)',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 12,
        gherkinStepLine: 10,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see a Parcels pane with a search box and a Parcels table',
        stepMatchArguments: []
      },
      {
        pwStepLine: 13,
        gherkinStepLine: 11,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see an 'Parcels' table with column headers as follows 'Sheet, Parcel, Area (ha), Land Change?'",
        stepMatchArguments: [
          { group: { start: 10, value: 'Parcels', children: [] } },
          {
            group: {
              start: 57,
              value: 'Sheet, Parcel, Area (ha), Land Change?',
              children: []
            }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 16,
    pickleLine: 14,
    tags: ['@basic', '@possible-vi-test'],
    steps: [
      {
        pwStepLine: 17,
        gherkinStepLine: 15,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 18,
        gherkinStepLine: 16,
        keywordType: 'Action',
        textWithKeyword: 'When I select a Parcel in the Parcels table',
        stepMatchArguments: []
      },
      {
        pwStepLine: 19,
        gherkinStepLine: 17,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see a Parcel Summary with a bold header which is a concatenation of the sheet and parcel codes selected',
        stepMatchArguments: []
      },
      {
        pwStepLine: 20,
        gherkinStepLine: 18,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the Parcel Summary has fields for 'Area (ha), Pending Customer Notified Land Change?, Effective Date From, Effective Date To'",
        stepMatchArguments: [
          {
            group: {
              start: 35,
              value:
                'Area (ha), Pending Customer Notified Land Change?, Effective Date From, Effective Date To',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 21,
        gherkinStepLine: 19,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see an 'Land Parcel Summary' table with column headers as follows 'Code, Land Cover and Area (ha)'",
        stepMatchArguments: [
          { group: { start: 10, value: 'Land Parcel Summary', children: [] } },
          {
            group: {
              start: 69,
              value: 'Code, Land Cover and Area (ha)',
              children: []
            }
          }
        ]
      }
    ]
  },
  {
    pwTestLine: 24,
    pickleLine: 22,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 25,
        gherkinStepLine: 23,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 26,
        gherkinStepLine: 24,
        keywordType: 'Action',
        textWithKeyword: 'When I select a new date',
        stepMatchArguments: []
      },
      {
        pwStepLine: 27,
        gherkinStepLine: 25,
        keywordType: 'Outcome',
        textWithKeyword: 'Then the page refreshes the data',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 30,
    pickleLine: 28,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 31,
        gherkinStepLine: 29,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 32,
        gherkinStepLine: 30,
        keywordType: 'Action',
        textWithKeyword: 'When I delete all the text in the Date field',
        stepMatchArguments: []
      },
      {
        pwStepLine: 33,
        gherkinStepLine: 31,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 34,
        gherkinStepLine: 32,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: 'Date must be in dd/mm/yyy format. For example 25/12/2024',
              children: []
            }
          },
          { group: { start: 94, value: 'Land Date', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 37,
    pickleLine: 35,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 38,
        gherkinStepLine: 36,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 39,
        gherkinStepLine: 37,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'aaa' into the date picker",
        stepMatchArguments: [
          { group: { start: 9, value: 'aaa', children: [] } }
        ]
      },
      {
        pwStepLine: 40,
        gherkinStepLine: 38,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 41,
        gherkinStepLine: 39,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: 'Date must be in dd/mm/yyy format. For example 25/12/2024',
              children: []
            }
          },
          { group: { start: 94, value: 'Land Date', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 44,
    pickleLine: 42,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 45,
        gherkinStepLine: 43,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 46,
        gherkinStepLine: 44,
        keywordType: 'Action',
        textWithKeyword: "When I enter '01/01' into the date picker",
        stepMatchArguments: [
          { group: { start: 9, value: '01/01', children: [] } }
        ]
      },
      {
        pwStepLine: 47,
        gherkinStepLine: 45,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 48,
        gherkinStepLine: 46,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: 'Date must be in dd/mm/yyy format. For example 25/12/2024',
              children: []
            }
          },
          { group: { start: 94, value: 'Land Date', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 51,
    pickleLine: 49,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 52,
        gherkinStepLine: 50,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 53,
        gherkinStepLine: 51,
        keywordType: 'Action',
        textWithKeyword: "When I enter '32/32/32' into the date picker",
        stepMatchArguments: [
          { group: { start: 9, value: '32/32/32', children: [] } }
        ]
      },
      {
        pwStepLine: 54,
        gherkinStepLine: 52,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 55,
        gherkinStepLine: 53,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning message 'Date must be in dd/mm/yyy format. For example 25/12/2024' under the 'Land Date' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: 'Date must be in dd/mm/yyy format. For example 25/12/2024',
              children: []
            }
          },
          { group: { start: 94, value: 'Land Date', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 58,
    pickleLine: 56,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 59,
        gherkinStepLine: 57,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 60,
        gherkinStepLine: 58,
        keywordType: 'Action',
        textWithKeyword: "When I enter '31/12/2040' into the date picker",
        stepMatchArguments: [
          { group: { start: 9, value: '31/12/2040', children: [] } }
        ]
      },
      {
        pwStepLine: 61,
        gherkinStepLine: 59,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 62,
        gherkinStepLine: 60,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning message 'Date must be todays date or in the past.' under the 'Land Date' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: 'Date must be todays date or in the past.',
              children: []
            }
          },
          { group: { start: 78, value: 'Land Date', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 65,
    pickleLine: 63,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 66,
        gherkinStepLine: 64,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Land Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 67,
        gherkinStepLine: 65,
        keywordType: 'Action',
        textWithKeyword: "When I enter '31/12/2014' into the date picker",
        stepMatchArguments: [
          { group: { start: 9, value: '31/12/2014', children: [] } }
        ]
      },
      {
        pwStepLine: 68,
        gherkinStepLine: 66,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 69,
        gherkinStepLine: 67,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a warning message 'Date must on or after 01/01/2015' under the 'Land Date' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: 'Date must on or after 01/01/2015',
              children: []
            }
          },
          { group: { start: 70, value: 'Land Date', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 72,
    pickleLine: 70,
    tags: ['@intermediate', '@data-dependent'],
    steps: [
      {
        pwStepLine: 73,
        gherkinStepLine: 71,
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
        pwStepLine: 74,
        gherkinStepLine: 72,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Land Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 75,
        gherkinStepLine: 73,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'SS66' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'SS66', children: [] } }
        ]
      },
      {
        pwStepLine: 76,
        gherkinStepLine: 74,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 77,
        gherkinStepLine: 75,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the correct list of parcels in the Parcels table as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 78,
        gherkinStepLine: 81,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 79,
        gherkinStepLine: 82,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 80,
        gherkinStepLine: 83,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the correct list of parcels in the Parcels table as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 83,
    pickleLine: 91,
    tags: ['@intermediate', '@data-dependent'],
    steps: [
      {
        pwStepLine: 84,
        gherkinStepLine: 92,
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
        pwStepLine: 85,
        gherkinStepLine: 93,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Land Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 86,
        gherkinStepLine: 94,
        keywordType: 'Action',
        textWithKeyword: "When I enter '818' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '818', children: [] } }
        ]
      },
      {
        pwStepLine: 87,
        gherkinStepLine: 95,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 88,
        gherkinStepLine: 96,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the correct list of parcels in the Parcels table as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 89,
        gherkinStepLine: 102,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 90,
        gherkinStepLine: 103,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 91,
        gherkinStepLine: 104,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the correct list of parcels in the Parcels table as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 94,
    pickleLine: 112,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 95,
        gherkinStepLine: 113,
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
        pwStepLine: 96,
        gherkinStepLine: 114,
        keywordType: 'Action',
        textWithKeyword: 'When I navigate to the Land Details page',
        stepMatchArguments: [
          { group: { start: 18, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 97,
        gherkinStepLine: 115,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the following data in the Land Summary section',
        stepMatchArguments: []
      },
      {
        pwStepLine: 98,
        gherkinStepLine: 120,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see the following data in the Land Summary table',
        stepMatchArguments: []
      },
      {
        pwStepLine: 99,
        gherkinStepLine: 125,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a warning message 'We didn't find any data to show at this time' under the 'Parcels' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: "We didn't find any data to show at this time",
              children: []
            }
          },
          { group: { start: 82, value: 'Parcels', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 102,
    pickleLine: 128,
    tags: ['@advanced'],
    steps: [
      {
        pwStepLine: 103,
        gherkinStepLine: 129,
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
        pwStepLine: 104,
        gherkinStepLine: 130,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Land Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 105,
        gherkinStepLine: 131,
        keywordType: 'Action',
        textWithKeyword: 'When I select the first day of every month',
        stepMatchArguments: []
      },
      {
        pwStepLine: 106,
        gherkinStepLine: 132,
        keywordType: 'Outcome',
        textWithKeyword: 'Then no error is shown on screen',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 109,
    pickleLine: 135,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 110,
        gherkinStepLine: 136,
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
        pwStepLine: 111,
        gherkinStepLine: 137,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Land Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 112,
        gherkinStepLine: 138,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the following data in the Land Summary section',
        stepMatchArguments: []
      },
      {
        pwStepLine: 113,
        gherkinStepLine: 143,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see the following data in the Land Summary table',
        stepMatchArguments: []
      },
      {
        pwStepLine: 114,
        gherkinStepLine: 148,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see the correct list of parcels in the Parcels table as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 115,
        gherkinStepLine: 154,
        keywordType: 'Action',
        textWithKeyword: "When I click on the parcel 'SS6627 5662'",
        stepMatchArguments: [
          { group: { start: 23, value: 'SS6627 5662', children: [] } }
        ]
      },
      {
        pwStepLine: 116,
        gherkinStepLine: 155,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a Parcel Summary section with a bold header 'SS6627 5662'",
        stepMatchArguments: [
          { group: { start: 51, value: 'SS6627 5662', children: [] } }
        ]
      },
      {
        pwStepLine: 117,
        gherkinStepLine: 156,
        keywordType: 'Outcome',
        textWithKeyword: 'And the Parcel Summary has field data as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 118,
        gherkinStepLine: 162,
        keywordType: 'Outcome',
        textWithKeyword: 'And the Parcel Summary table has data as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 121,
    pickleLine: 169,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 122,
        gherkinStepLine: 170,
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
        pwStepLine: 123,
        gherkinStepLine: 171,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Land Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 124,
        gherkinStepLine: 172,
        keywordType: 'Action',
        textWithKeyword: "When I enter '01/01/2015' into the date picker",
        stepMatchArguments: [
          { group: { start: 9, value: '01/01/2015', children: [] } }
        ]
      },
      {
        pwStepLine: 125,
        gherkinStepLine: 173,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 126,
        gherkinStepLine: 174,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the following data in the Land Summary section',
        stepMatchArguments: []
      },
      {
        pwStepLine: 127,
        gherkinStepLine: 179,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see the following data in the Land Summary table',
        stepMatchArguments: []
      },
      {
        pwStepLine: 128,
        gherkinStepLine: 184,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see the correct list of parcels in the Parcels table as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 129,
        gherkinStepLine: 190,
        keywordType: 'Action',
        textWithKeyword: "When I click on the parcel 'SS6627 5662'",
        stepMatchArguments: [
          { group: { start: 23, value: 'SS6627 5662', children: [] } }
        ]
      },
      {
        pwStepLine: 130,
        gherkinStepLine: 191,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a Parcel Summary section with a bold header 'SS6627 5662'",
        stepMatchArguments: [
          { group: { start: 51, value: 'SS6627 5662', children: [] } }
        ]
      },
      {
        pwStepLine: 131,
        gherkinStepLine: 192,
        keywordType: 'Outcome',
        textWithKeyword: 'And the Parcel Summary has field data as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 132,
        gherkinStepLine: 198,
        keywordType: 'Outcome',
        textWithKeyword: 'And the Parcel Summary table has data as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 135,
    pickleLine: 205,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 136,
        gherkinStepLine: 206,
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
        pwStepLine: 137,
        gherkinStepLine: 207,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Land Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Land Details', children: [] } }
        ]
      },
      {
        pwStepLine: 138,
        gherkinStepLine: 208,
        keywordType: 'Action',
        textWithKeyword: "When I enter '15/06/2020' into the date picker",
        stepMatchArguments: [
          { group: { start: 9, value: '15/06/2020', children: [] } }
        ]
      },
      {
        pwStepLine: 139,
        gherkinStepLine: 209,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 140,
        gherkinStepLine: 210,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the following data in the Land Summary section',
        stepMatchArguments: []
      },
      {
        pwStepLine: 141,
        gherkinStepLine: 215,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see the following data in the Land Summary table',
        stepMatchArguments: []
      },
      {
        pwStepLine: 142,
        gherkinStepLine: 220,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see the correct list of parcels in the Parcels table as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 143,
        gherkinStepLine: 226,
        keywordType: 'Action',
        textWithKeyword: "When I click on the parcel 'SS6627 5662'",
        stepMatchArguments: [
          { group: { start: 23, value: 'SS6627 5662', children: [] } }
        ]
      },
      {
        pwStepLine: 144,
        gherkinStepLine: 227,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a Parcel Summary section with a bold header 'SS6627 5662'",
        stepMatchArguments: [
          { group: { start: 51, value: 'SS6627 5662', children: [] } }
        ]
      },
      {
        pwStepLine: 145,
        gherkinStepLine: 228,
        keywordType: 'Outcome',
        textWithKeyword: 'And the Parcel Summary has field data as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 146,
        gherkinStepLine: 234,
        keywordType: 'Outcome',
        textWithKeyword: 'And the Parcel Summary table has data as follows',
        stepMatchArguments: []
      }
    ]
  }
] // bdd-data-end
